import PromotionCard from "@/app/utilities/ui/components/promotion-card/PromotionCard"
import ProductCategoriesList from "@/app/utilities/ui/components/product-categories/ProductCategoriesList";

export default function CategoryPagesLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col px-6 pt-16 pb-[7.5rem] gap-[7.5rem]">
            <div className="bg-blue-300">{children}</div>
            <ProductCategoriesList />
            <PromotionCard />
        </div>
    );
}