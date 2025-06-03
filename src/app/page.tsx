import ProductCategoriesList from "@/app/utilities/ui/components/product-category-list/ProductCategoriesList";
import FeaturedProducts from "@/app/utilities/ui/components/featured-products/FeaturedProducts";
import PromotionCard from "@/app/utilities/ui/components/promotion-card/PromotionCard";

export default function Home() {
  const filterValue: undefined = undefined;
  return (
    <div className="flex flex-col px-6 md:px-[2.44rem] lg:px-[10.31rem] pt-12 md:pt-24 lg:pt-32 pb-[7.5rem] md:pb-24 lg:pb-[12.5rem] gap-[7.5rem] md:gap-24 lg:gap-[10rem]">
      <ProductCategoriesList path={filterValue} />
      <FeaturedProducts />
      <PromotionCard />
    </div >
  );
}
