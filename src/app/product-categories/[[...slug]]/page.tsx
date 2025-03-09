import type { Metadata } from "next"
import { redirect, notFound } from "next/navigation"
import { getCategoryBySlug } from "@/app/utilities/library/function"
import { categories, products } from "@/app/utilities/library/data"
import ProductsList from "@/app/components/products-list/ProductsList"
import ProductCategories from "@/app/components/product-categories/ProductCategories"
import PromotionCard from "@/app/components/copyright/PromotionCard"

export default async function CategoryPage({ params, }: { params: Promise<{ slug?: string[] }> }) {
    const slug = (await params).slug?.[0]

    if (!slug) {
        const firstCategory = categories.sort((a, b) => a.name.localeCompare(b.name))[0]?.slug;
        if (firstCategory) {
            return redirect(`/product-categories/${firstCategory}`);
        }
    }

    const categoryData = slug ? getCategoryBySlug(slug) : null;
    if (!categoryData) {
        return redirect(`/product-categories/${categories[0].slug}`);
    }

    const productsList = products.find(p => p.category === slug)?.products || [];
    const otherCategories = products.filter(p => p.category !== slug);

    return (
        <div className="flex flex-col px-6 pt-16 pb-[7.5rem] gap-[7.5rem]">
            <ProductsList products={productsList} />
            <ProductCategories categories={otherCategories} />
            <PromotionCard />
        </div>
    );
}