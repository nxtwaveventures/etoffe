from vertexai.preview.vision_models import ImageGenerationModel
import inspect

try:
    sig = inspect.signature(ImageGenerationModel.edit_image)
    print(f"Edit Image Sig: {sig}")
except  Exception as e:
    print(f"Edit error: {e}")

try:
    sig = inspect.signature(ImageGenerationModel.generate_images)
    print(f"Generate Image Sig: {sig}")
except Exception as e:
    print(f"Generate error: {e}")
