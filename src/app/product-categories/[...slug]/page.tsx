import type { Metadata } from "next"
import { redirect, notFound } from "next/navigation"
import { getCategoryBySlug } from "@/app/utilities/library/function"
import { products } from "@/app/utilities/library/data"
import ProductsList from "@/app/components/products-list/ProductsList"
import ProductCategories from "@/app/components/product-categories/ProductCategories"
import PromotionCard from "@/app/components/copyright/PromotionCard"

export default async function CategoryPage({ params, }: { params: Promise<{ slug: string[] }> }) {
    const slug = (await params).slug[0]
    const categoryData = getCategoryBySlug(slug);

    if (!categoryData) {
        return notFound();
    }

    const productsList = products.find(p => p.category === slug)?.products || [];
    const otherCategories = products.filter(p => p.category !== slug);

    return (
        <div>
            <ProductsList products={productsList} />
            <ProductCategories categories={otherCategories} />
            <section id="copyright-section" className="mb-28 px-6"><PromotionCard /></section>
        </div>
    );
}

