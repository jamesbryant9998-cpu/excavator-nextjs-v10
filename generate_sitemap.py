import json, os

domain = 'https://excavator-nextjs-v10-jamesbryant9998-3760s-projects.vercel.app'
urls = [domain + '/']

# Add products
products = json.load(open('data/products.json', encoding='utf-8'))
for p in products:
    urls.append(f"{domain}/products/{p['slug']}")

# Add guides
guides = json.load(open('data/guides.json', encoding='utf-8'))
for g in guides:
    urls.append(f"{domain}/guides/{g['slug']}")

# Add news
news = json.load(open('data/news.json', encoding='utf-8'))
for n in news:
    urls.append(f"{domain}/news/{n['slug']}")

# Add blogs
blogs = json.load(open('data/blogs.json', encoding='utf-8'))
for b in blogs:
    urls.append(f"{domain}/blog/{b['slug']}")

# Write XML
xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for url in urls:
    xml_content += f'  <url>\n    <loc>{url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n'
xml_content += '</urlset>'

with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(xml_content)

with open('public/robots.txt', 'w', encoding='utf-8') as f:
    f.write(f"User-agent: *\nAllow: /\nSitemap: {domain}/sitemap.xml\n")

print(f"Successfully generated sitemap with {len(urls)} URLs.")
