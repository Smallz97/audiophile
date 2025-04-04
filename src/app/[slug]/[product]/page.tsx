import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsListOfSingleCategory } from "@/app/utilities/library/data";
import { findMatchingCategory } from "@/app/utilities/library/functions";
import ProductDetails from "@/app/utilities/ui/components/product-details/ProductDetails";

export default async function ProductOverviewPage({ params }: { params: Promise<{ slug: string, product: string }> }) {
    const { slug, product } = await params;
    const decodedProduct = decodeURIComponent(product);

    if (!findMatchingCategory(slug)) {
        return notFound();
    }

    const productsList = getProductsListOfSingleCategory(slug);
    const displayedProduct = productsList.find(p => p.name === decodedProduct)

    if (!displayedProduct) {
        return notFound();
    }

    return (
        <div className="flex flex-col">
            <Link href={`/${slug}`} className="mb-6">
                <div className="opacity-50 text-black text-base font-normal leading-normal">Go back</div>
            </Link>
            <ProductDetails product={displayedProduct} />
        </div>
    )
}