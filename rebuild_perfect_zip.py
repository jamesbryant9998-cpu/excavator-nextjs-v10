import zipfile
import os

zip_name = 'heavymachinerypro-v11-perfect.zip'

# 明确包含的文件和目录
include_items = [
    'app',
    'components',
    'data',
    'public',
    'package.json',
    'next.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'tsconfig.json',
    'vercel.json',
    'README.md',
    'next-env.d.ts'
]

# 需要彻底剔除的模式
exclude_names = {
    '.next', 
    'node_modules', 
    '.git', 
    'excavator-nextjs-v11-deployed-updated', # 排除旧的冗余子目录
    'excavator-nextjs-v11-deployed-updated.zip',
    'heavymachinerypro-v11-final-pro.zip',
    'heavymachinerypro-v11-brand-final.zip',
    'rebuild_perfect_zip.py'
}

def create_zip():
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as z:
        for item in include_items:
            if not os.path.exists(item):
                print(f"Warning: {item} not found, skipping.")
                continue
                
            if os.path.isfile(item):
                z.write(item, item)
                print(f"Added file: {item}")
            else:
                for root, dirs, files in os.walk(item):
                    # 动态修改 dirs 以排除不需要的子目录
                    dirs[:] = [d for d in dirs if d not in exclude_names]
                    for file in files:
                        if file in exclude_names:
                            continue
                        full_path = os.path.join(root, file)
                        rel_path = os.path.relpath(full_path, '.')
                        z.write(full_path, rel_path)
                print(f"Added directory: {item}")

if __name__ == "__main__":
    if os.path.exists(zip_name):
        os.remove(zip_name)
    create_zip()
    size = os.path.getsize(zip_name) / (1024 * 1024)
    print(f"\nSUCCESS: {zip_name} generated ({size:.2f} MB)")
