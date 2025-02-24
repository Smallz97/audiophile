import Header from "@/app/components/header/Header";
import Category from "@/app/components/product-categories/ProductCategoryCard";
import ZX9Banner from "@/app/components/banners/ZX9Banner";
import ZX7Banner from "@/app/components/banners/ZX7Banner";
import YX1Banner from "@/app/components/banners/YX1Banner";
import PromotionCard from "@/app/components/copyright/PromotionCard";

export default function Home() {
  return (
    <div className="">
      <section id="header-section"><Header /></section>
      <section id="production-category-section" className="flex flex-col mb-28 px-6">
        <Category />
        <Category />
        <Category />
      </section>
      <section id="promo-banners-section" className="flex flex-col gap-6 mb-28 px-6">
        <ZX9Banner />
        <ZX7Banner />
        <YX1Banner />
      </section>
      <section id="copyright-section" className="mb-28 px-6"><PromotionCard /></section>
    </div >
  );
}
