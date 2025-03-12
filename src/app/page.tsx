import ProductCategoriesList from "@/app/utilities/ui/components/product-categories/ProductCategoriesList";
import FeaturedProducts from "@/app/utilities/ui/components/featured-products/FeaturedProducts";
import PromotionCard from "@/app/utilities/ui/components/promotion-card/PromotionCard";

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  console.log(slug)
  return (
    <div className="flex flex-col px-6 pt-12 pb-[7.5rem] gap-[7.5rem]">
      <ProductCategoriesList path={slug} />
      <FeaturedProducts />
      <PromotionCard />
    </div >
  );
}
