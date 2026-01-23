from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs("assets/models", exist_ok=True)

def create_dummy_model(filename, color, name):
    img = Image.new('RGB', (400, 600), color=color)
    d = ImageDraw.Draw(img)
    # Draw some text
    d.text((50, 250), f"Model: {name}", fill=(255, 255, 255))
    d.text((50, 280), "Placeholder Image", fill=(255, 255, 255))
    img.save(filename)
    print(f"Created {filename}")

create_dummy_model("assets/models/ananya_base.png", (200, 100, 100), "Ananya")
create_dummy_model("assets/models/zara_base.png", (100, 100, 200), "Zara")
