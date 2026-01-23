from ai_engine import generate_drape
from PIL import Image
import os

# Create dummy inputs
os.makedirs("downloads", exist_ok=True)
dummy_img = Image.new('RGB', (100, 100), color = 'red')
dummy_img.save("downloads/test_body.jpg")
dummy_img.save("downloads/test_border.jpg")
dummy_img.save("downloads/test_pallu.jpg")

user_data = {
    'body_path': "downloads/test_body.jpg",
    'border_path': "downloads/test_border.jpg",
    'pallu_path': "downloads/test_pallu.jpg"
}

print("Running Generate Drape Shim Test...")
try:
    result = generate_drape(user_data, "Ananya")
    print("Success!")
    print(f"Result Type: {type(result)}")
    result.show()
except Exception as e:
    print(f"FAILED: {e}")
    import traceback
    traceback.print_exc()
