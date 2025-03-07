import { products } from "@/app/utilities/library/data";
import ProductCategories from "@/app/components/product-categories/ProductCategories";
import FeaturedProducts from "@/app/components/featured-products/FeaturedProducts";
import PromotionCard from "@/app/components/copyright/PromotionCard";

export default function Home() {
  return (
    <div className="flex flex-col px-6 pt-12 gap-[7.5rem]">
      <ProductCategories categories={products} />
      <FeaturedProducts />
      <PromotionCard />
    </div >
  );
}
