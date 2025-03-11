import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "@/app/utilities/library/data"
import { findMatchingCategory } from "@/app/utilities/library/functions"
import PromotionCard from "@/app/components/copyright/PromotionCard"
import ProductsList from "@/app/components/products-list/ProductsList"
import ProductCategories from "@/app/components/product-categories/ProductCategories"

export default async function CategoryPage({ params, }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug

    if (!findMatchingCategory(slug)) {
        return notFound();
    }

    const productsList = products.find(p => p.category === slug)!.products;
    const otherCategories = products.filter(p => p.category !== slug);

    return (
        <div className="flex flex-col px-6 pt-16 pb-[7.5rem] gap-[7.5rem]">
            <ProductsList products={productsList} />
            <ProductCategories categories={otherCategories} />
            <PromotionCard />
        </div>
    );
}