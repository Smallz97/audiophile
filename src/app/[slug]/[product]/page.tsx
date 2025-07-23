import { notFound } from "next/navigation";
import { findMatchingCategory } from "@/app/utilities/functions-and-utilities/utility-functions";
import { getProductsInASingleCategory } from "@/app/utilities/library/data";
import ProductDetails from "@/app/utilities/ui/components/product-details-components/ProductDetails";

export default async function ProductOverviewPage({ params }: { params: Promise<{ slug: string, product: string }> }) {
    const { slug, product } = await params;
    const decodedProduct = decodeURIComponent(product);

    if (!findMatchingCategory(slug)) {
        return notFound();
    }

    const productsList = getProductsInASingleCategory(slug);
    const displayedProduct = productsList.find(p => p.name === decodedProduct)

    if (!displayedProduct) {
        return notFound();
    }

    return (
        <div className="flex flex-col">
            {/* <Link
                className="mb-6"
                href={`/${slug}`}
            >
                <div className="opacity-50 text-black text-base font-normal leading-normal">Go back</div>
            </Link> */}
            <ProductDetails product={displayedProduct} />
        </div>
    )
}