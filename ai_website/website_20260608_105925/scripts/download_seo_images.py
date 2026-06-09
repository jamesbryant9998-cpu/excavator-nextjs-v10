import os
import urllib.request
from PIL import Image

# Define image URLs and SEO target names
seo_images = {
    "public/images/used-caterpillar-3055e-mini-excavator-fob.webp": "https://sc02.alicdn.com/kf/Ad9c6ade43a6942948a6d4480df67b45bc.png",
    "public/images/used-caterpillar-312d-crawler-excavator-price.webp": "https://sc02.alicdn.com/kf/A7d99f9237e094c609292e119a29b07c5b.png",
    "public/images/heavy-used-cat-330d-excavator-specification.webp": "https://sc02.alicdn.com/kf/A94cd5427bb224c6c934a10f6ef4954f6u.png",
    "public/images/used-caterpillar-336d-heavy-mining-excavator-sale.webp": "https://sc02.alicdn.com/kf/A090e45f594a14c5395341f0470f13530J.png",
    "public/images/large-used-caterpillar-349d-excavator-wholesale.webp": "https://sc02.alicdn.com/kf/Afbcc1160c24443299d37ee2d89e108f2c.png"
}

# Create directory if it doesn't exist
os.makedirs("public/images", exist_ok=True)

for path, url in seo_images.items():
    try:
        print(f"Downloading SEO Image {url}...")
        temp_png = path + ".png"
        urllib.request.urlretrieve(url, temp_png)
        
        print(f"Converting to {path} with Pillow...")
        with Image.open(temp_png) as im:
            im.save(path, "WEBP", quality=85)
            
        os.remove(temp_png)
        print(f"SEO Image successfully saved as: {path}!")
    except Exception as e:
        print(f"Error processing {path}: {e}")

print("All Google SEO WEBP image conversions finished!")
