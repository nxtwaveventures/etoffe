import base64
import requests
import google.auth
from google.auth.transport.requests import Request
from google.cloud import aiplatform

class VirtualTryOnModel:
    def __init__(self, model_id):
        self.model_id = model_id
        # Grab project/location from global aiplatform config
        # Ensure aiplatform.init() was called before this
        self.project = aiplatform.initializer.global_config.project
        self.location = aiplatform.initializer.global_config.location
        if not self.project or not self.location:
             raise ValueError("Please call aiplatform.init(project=..., location=...) before using VirtualTryOnModel")

        self.endpoint = f"https://{self.location}-aiplatform.googleapis.com/v1/projects/{self.project}/locations/{self.location}/publishers/google/models/{self.model_id}:predict"

    @classmethod
    def from_pretrained(cls, model_id):
        return cls(model_id)

    def drape(self, base_person_image, product_images, clothing_type="one_piece"):
        """
        Executes the virtual try-on call via REST API.
        
        Args:
            base_person_image (vertexai.preview.vision_models.Image): The person image.
            product_images (list[vertexai.preview.vision_models.Image]): List of garment images.
            clothing_type (str): Type of clothing.
        """
        
        # 1. Get Credentials
        credentials, _ = google.auth.default()
        auth_req = Request()
        credentials.refresh(auth_req)
        access_token = credentials.token
        
        # 2. Prepare Images
        # Helper to get bytes
        def get_b64(img):
            if hasattr(img, '_image_bytes') and img._image_bytes:
                 return base64.b64encode(img._image_bytes).decode('utf-8')
            # Fallback if _image_bytes isn't loaded/available
            # Note: This depends on how Image was loaded. 
            raise ValueError("Image object does not contain bytes data")

        base_b64 = get_b64(base_person_image)
        product_b64s = [get_b64(img) for img in product_images]

        # 3. Construct Payload
        # Note: The exact JSON structure for 'virtual-try-on-preview' is likely to evolve.
        # This structure is a best-effort guess based on the user's method signature.
        # If this fails with 400, strictly check the payload keys in documentation.
        instance = {
            "base_image": {
                "bytesBase64Encoded": base_b64
            },
            "product_images": [
                {"bytesBase64Encoded": pb} for pb in product_b64s
            ],
            "clothing_type": clothing_type
        }
        
        payload = {
            "instances": [instance],
            # parameters can be added here if needed
        }
        
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json; charset=utf-8"
        }
        
        # 4. Execute Request
        response = requests.post(self.endpoint, json=payload, headers=headers)
        
        if response.status_code != 200:
            raise RuntimeError(f"Virtual Try-On API failed: {response.status_code} {response.text}")
            
        # 5. Parse Response
        # Expected format: { "predictions": [ "bytesBase64Encoded": "..." ] } 
        # or { "predictions": [ { "generated_image": "..." } ] }
        result = response.json()
        predictions = result.get('predictions', [])
        if not predictions:
            raise RuntimeError(f"No predictions returned: {result}")
            
        # Assuming the first prediction contains the image or bytes
        pred = predictions[0]
        
        # It might be a base64 string directly or a dict
        if isinstance(pred, str):
            image_bytes = base64.b64decode(pred)
        elif isinstance(pred, dict) and 'bytesBase64Encoded' in pred:
            image_bytes = base64.b64decode(pred['bytesBase64Encoded'])
        elif isinstance(pred, dict) and 'output_image' in pred:
             # handle possible wrapper
             image_bytes = base64.b64decode(pred['output_image'])
        else:
             # Fallback: try to find any base64 looking key
             # For now, just dump if unknown
             image_bytes = None
             for k, v in pred.items():
                 if "bytes" in k or "image" in k:
                      try:
                          image_bytes = base64.b64decode(v)
                          break
                      except:
                          pass
             if image_bytes is None:
                 raise RuntimeError(f"Could not parse image from prediction: {pred.keys()}")

        # Return a structure that matches response.generated_image
        # The user code expects: response.generated_image
        # warning: response is usually a GenerationResponse object.
        # We need to return an object with a .generated_image property
        
        from vertexai.preview.vision_models import GeneratedImage
        # GeneratedImage might expect bytes or a payload. 
        # Let's inspect GeneratedImage if needed or just return a simple Mock.
        
        class MockResponse:
             def __init__(self, bytes_data):
                 # GeneratedImage requires bytes and parameters
                 self.generated_image = GeneratedImage(bytes_data, generation_parameters={})

        return MockResponse(image_bytes)

