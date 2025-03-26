import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { productCategories } from "@/app/utilities/library/data"
import ProductsList from "@/app/utilities/ui/components/products-list/ProductsList"
import { findMatchingCategory, categoryPages } from "@/app/utilities/library/functions"

export async function generateStaticParams() {
    return categoryPages.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const category = categoryPages.find((cat) => cat.slug === slug);

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
            title: `${category.name} | Audiophile`,
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
            title: `${category.name} | Audiophile`,
            description: category.metaDescription,
        },
    };
}

export default async function CategoryPage({ params, }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug

    if (!findMatchingCategory(slug)) {
        return notFound();
    }

    const listedProducts = productCategories.find(p => p.category === slug)!.products;

    return (
        <ProductsList productsList={listedProducts} />
    );
}