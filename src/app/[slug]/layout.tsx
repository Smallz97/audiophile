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
        <div
            className="flex flex-col px-fluid md:px-fluid lg:px-fluid pt-16 md:pt-[7.5rem] pb-[7.5rem] lg:pb-[10rem] gap-[7.5rem] lg:gap-[10rem]"
        >
            {children}
            <ProductCategoriesList path={slug} />
            <PromotionCard />
        </div>
    );
}