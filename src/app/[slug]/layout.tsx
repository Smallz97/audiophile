import PromotionCard from "@/app/utilities/ui/components/promotion-card/PromotionCard"
import ProductCategoriesList from "@/app/utilities/ui/components/product-category-list/ProductCategoriesList";

export default async function CategoryPagesLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    return (
        <div className="flex flex-col px-6 pt-16 pb-[7.5rem] gap-[7.5rem]">
            {children}
            <ProductCategoriesList path={slug} />
            <PromotionCard />
        </div>
    );
}