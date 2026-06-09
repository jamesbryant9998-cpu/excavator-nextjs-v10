import os
import urllib.request
from PIL import Image

# Define image URLs and target names
images_to_download = {
    "public/images/blog1.webp": "https://sc02.alicdn.com/kf/A2e104294817e4e838fb82c86c81170a8e.png",
    "public/images/blog2.webp": "https://sc02.alicdn.com/kf/Ae46454627c7848cca3b0a87f76292e363.png",
    "public/images/blog3.webp": "https://sc02.alicdn.com/kf/Aaca9c9a28d624b91ba17ac86e4e2085cn.png",
    "public/images/blog4.webp": "https://sc02.alicdn.com/kf/A05eead8fe8b74fcc90656b31354a5a3fB.png",
    "public/images/blog5.webp": "https://sc02.alicdn.com/kf/A92cb301ae1d3451dbaac8bdab3e45c9fo.png",
    "public/images/news1.webp": "https://sc02.alicdn.com/kf/A55ca856814474b93be93a001365faffe8.png",
    "public/images/news2.webp": "https://sc02.alicdn.com/kf/Aebf91f38c4954299868cc026b71d64b8P.png",
    "public/images/news3.webp": "https://sc02.alicdn.com/kf/Aef6c21d816c0457885f4a6ad591307bad.png",
    "public/images/news4.webp": "https://sc02.alicdn.com/kf/A6cf8878265db4d788324621ddee26177f.png",
    "public/images/news5.webp": "https://sc02.alicdn.com/kf/A73ea885936d8456f848cb8c742a77a6eD.png"
}

# Create directory if it doesn't exist
os.makedirs("public/images", exist_ok=True)

for path, url in images_to_download.items():
    try:
        print(f"Downloading {url}...")
        # Download image temporarily as a PNG
        temp_png = path + ".png"
        urllib.request.urlretrieve(url, temp_png)
        
        # Convert to webp using Pillow
        print(f"Converting to {path}...")
        with Image.open(temp_png) as im:
            im.save(path, "WEBP", quality=85)
            
        # Clean up temporary PNG
        os.remove(temp_png)
        print(f"Successfully saved {path}!")
    except Exception as e:
        print(f"Error processing {path}: {e}")

print("All image conversions finished!")
