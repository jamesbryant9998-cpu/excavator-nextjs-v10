import os
import urllib.request
from PIL import Image

# Define image URLs and SEO target names for 95% New stock
new_stock_images = {
    "public/images/used-caterpillar-320d-excavator-95-new.webp": "https://sc02.alicdn.com/kf/A9b168711db384234b7251af35719b640e.png",
    "public/images/used-komatsu-pc200-8-excavator-95-new.webp": "https://sc02.alicdn.com/kf/A642deec9a31e40278ca980eab9e709d5R.png",
    "public/images/used-sany-sy215c-excavator-95-new.webp": "https://sc02.alicdn.com/kf/Abc735040ba02461987d1a83eb9024a39X.png",
    "public/images/used-hitachi-zx200-3-excavator-95-new.webp": "https://sc02.alicdn.com/kf/Af19494d2da3446b5a027758ad116f231s.png",
    "public/images/used-kubota-kx155-excavator-95-new.webp": "https://sc02.alicdn.com/kf/A1c812d53e17643ddaa5f2901c5a797b1f.png"
}

# Create directory if it doesn't exist
os.makedirs("public/images", exist_ok=True)

for path, url in new_stock_images.items():
    try:
        print(f"Downloading 95% New Stock Image {url}...")
        temp_png = path + ".png"
        urllib.request.urlretrieve(url, temp_png)
        
        print(f"Converting to {path} with Pillow...")
        with Image.open(temp_png) as im:
            im.save(path, "WEBP", quality=85)
            
        os.remove(temp_png)
        print(f"95% New Stock Image successfully saved as: {path}!")
    except Exception as e:
        print(f"Error processing {path}: {e}")

print("All 95% New Stock WEBP image conversions finished!")
