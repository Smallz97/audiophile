import Header from "@/app/components/header/Header";
import Category from "@/app/components/product-categories/ProductCategoryCard";
import PromotionCard from "@/app/components/copyright/PromotionCard";
import ProductOverview from "@/app/components/product-overview/ProductOverview";


export default function CategoryPage() {
    return (
        <div className="">
            <section id="header-section"><Header /></section>
            <section id="production-overview-section" className="flex flex-col gap-28 px-6 mt-16 mb-28">
                <ProductOverview />
                <ProductOverview />
                <ProductOverview />
            </section>
            <section id="production-category-section" className="flex flex-col gap-16 mb-28 px-6">
                <Category />
                <Category />
                <Category />
            </section>
            <section id="copyright-section" className="mb-28 px-6"><PromotionCard /></section>
        </div>
    )
}