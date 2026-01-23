import inspect
from vertexai.preview.vision_models import ImageGenerationModel

print("Methods of ImageGenerationModel:")
print(dir(ImageGenerationModel))

print("\n\nSignature of generate_images:")
try:
    print(inspect.signature(ImageGenerationModel.generate_images))
except Exception as e:
    print(e)
    
print("\n\nSignature of edit_image:")
try:
    print(inspect.signature(ImageGenerationModel.edit_image))
except Exception as e:
    print(e)
