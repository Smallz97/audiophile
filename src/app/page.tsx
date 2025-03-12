import ProductCategoriesList from "@/app/utilities/ui/components/product-categories/ProductCategoriesList";
import FeaturedProducts from "@/app/utilities/ui/components/featured-products/FeaturedProducts";
import PromotionCard from "@/app/utilities/ui/components/promotion-card/PromotionCard";

export default function Home() {
  return (
    <div className="flex flex-col px-6 pt-12 pb-[7.5rem] gap-[7.5rem]">
      <ProductCategoriesList />
      <FeaturedProducts />
      <PromotionCard />
    </div >
  );
}
