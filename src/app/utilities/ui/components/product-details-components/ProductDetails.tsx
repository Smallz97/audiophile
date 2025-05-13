import Image from "next/image"
import type { ProductDetailsProps } from "@/app/utilities/library/definitions"
import { getRandomSuggestedProducts } from "@/app/utilities/library/functions"
import BoxContent from "@/app/utilities/ui/components/product-details-components/BoxContents"
import PriceComponent from "@/app/utilities/ui/components/product-details-components/PriceComponent"
import ProductFeatures from "@/app/utilities/ui/components/product-details-components/ProductFeatures"
import ProductDescription from "@/app/utilities/ui/components/product-details-components/ProductDescription"
import SuggestedProductCard from "@/app/utilities/ui/components/product-details-components/SuggestedProductCard"
import ProductFeaturedImages from "@/app/utilities/ui/components/product-details-components/ProductFeaturedImages"

export default function ProductDetails({ product }: ProductDetailsProps) {
    const suggestedProducts = getRandomSuggestedProducts(product);

    return (
        <div className="flex flex-col gap-20">
            <div id="image-description-container" className="flex flex-col gap-8 md:flex-row">
                <div id="product-image-container" className="flex justify-center px-12 pt-10 pb-16 rounded-lg bg-zinc-100">
                    <Image
                        width={150}
                        height={180}
                        alt="product image"
                        src={product.productDetailImage}
                    />
                </div>
                <div id="product-description-container" className="flex flex-col gap-6">
                    <ProductDescription name={product.name} productType={product.productType} description={product.description} />
                    <PriceComponent price={product.price} productId={product.productId} />
                </div>
            </div>
            <ProductFeatures features={product.features} />
            <BoxContent items={product.boxContent} />
            <ProductFeaturedImages images={product.featuredImages} />
            <SuggestedProductCard products={suggestedProducts} />
        </div>
    )
}