import BrandProductDetailPage from "../../../../components/BrandProductDetailPage";
import productsData from "../../../../data/products.json";

export async function generateStaticParams() {
  return productsData
    .filter((p) => p.brand.toLowerCase() === "sany")
    .map((p) => ({
      slug: p.slug,
    }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BrandProductDetailPage params={params} brand="Sany" />;
}
