import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "@/app/utilities/library/data"
import { findMatchingCategory, categories } from "@/app/utilities/library/functions"
import PromotionCard from "@/app/components/copyright/PromotionCard"
import ProductsList from "@/app/components/products-list/ProductsList"
import ProductCategories from "@/app/components/product-categories/ProductCategories"

export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find((cat) => cat.slug === slug);

    if (!category) {
        return {
            title: 'Category Not Found',
            description: 'The requested category does not exist',
        };
    }

    return {
        title: `${category.name} | Audiophile`,
        description: category.metaDescription,
        keywords: category.keywords,
        openGraph: {
            title: `${category.name} | Your Store Name`,
            description: category.metaDescription,
            type: 'website',
            url: `https://yourwebsite.com/${slug}`,
            images: [
                {
                    url: `/images/product-category-images/${slug}-og.jpg`,
                    width: 1200,
                    height: 630,
                    alt: category.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${category.name} | Your Store Name`,
            description: category.metaDescription,
        },
    };
}

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