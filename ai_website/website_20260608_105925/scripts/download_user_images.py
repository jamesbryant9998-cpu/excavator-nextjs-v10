import os
import urllib.request
from PIL import Image

# Define image URLs and SEO target names for user uploaded CAT 320D excavators
user_cat_images = {
    "public/images/used-caterpillar-320d-excavator-premium.webp": "https://sc02.alicdn.com/kf/He348777261a44e86a5375f6e8eafc96a7.png",
    "public/images/used-caterpillar-320d-excavator-classic.webp": "https://sc02.alicdn.com/kf/H9fda0224fe6f42a2a1e32783ef3ced2fu.png",
    "public/images/used-caterpillar-320d-excavator-pro.webp": "https://sc02.alicdn.com/kf/H96ab4e4b7919422289a96b37bf813e40D.png"
}

# Create directory if it doesn't exist
os.makedirs("public/images", exist_ok=True)

for path, url in user_cat_images.items():
    try:
        print(f"Downloading User Uploaded Image {url}...")
        temp_png = path + ".png"
        urllib.request.urlretrieve(url, temp_png)
        
        print(f"Converting to {path} with Pillow...")
        with Image.open(temp_png) as im:
            im.save(path, "WEBP", quality=85)
            
        os.remove(temp_png)
        print(f"User Image successfully saved as: {path}!")
    except Exception as e:
        print(f"Error processing {path}: {e}")

print("All user uploaded CAT 320D WEBP image conversions finished!")
