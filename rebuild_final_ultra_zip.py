import zipfile
import os

zip_name = 'heavymachinerypro-v11-production-final.zip'

include_items = [
    'app',
    'components',
    'data',
    'public',
    '.vercel',
    'package.json',
    'next.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'tsconfig.json',
    'vercel.json',
    'generate_sitemap.py',
    'README.md',
    'next-env.d.ts'
]

exclude_names = {
    '.next', 
    'node_modules', 
    '.git', 
    'heavymachinerypro-v11-performance-ultra.zip',
    'heavymachinerypro-v11-production-ready.zip',
    'rebuild_final_ultra_zip.py'
}

def create_zip():
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as z:
        for item in include_items:
            if not os.path.exists(item):
                continue
            if os.path.isfile(item):
                z.write(item, item)
            else:
                for root, dirs, files in os.walk(item):
                    dirs[:] = [d for d in dirs if d not in exclude_names]
                    for file in files:
                        if file in exclude_names:
                            continue
                        full_path = os.path.join(root, file)
                        rel_path = os.path.relpath(full_path, '.')
                        z.write(full_path, rel_path)

if __name__ == "__main__":
    if os.path.exists(zip_name):
        os.remove(zip_name)
    create_zip()
    size = os.path.getsize(zip_name) / (1024 * 1024)
    print(f"SUCCESS: {zip_name} generated ({size:.2f} MB)")
