import Image from "next/image"
import type { ProductDetailsProps } from "@/app/utilities/library/definitions"
import { getRandomSuggestedProducts } from "@/app/utilities/library/functions"
import { BreakpointProvider } from "@/app/utilities/contexts/BreakpointContext"
import BoxContent from "@/app/utilities/ui/components/box-contents/BoxContents"
import PriceComponent from "@/app/utilities/ui/components/price-component/PriceComponent"
import ProductFeatures from "@/app/utilities/ui/components/product-features/ProductFeatures"
import FeaturedImages from "@/app/utilities/ui/components/responsive-images-containers/FeaturedImages"
import SuggestedProductCard from "@/app/utilities/ui/components/suggested-products/SuggestedProductCard"
import ProductDescription from "@/app/utilities/ui/components/product-description-container/ProductDescription"

export default function ProductDetails({ product }: ProductDetailsProps) {
    const suggestedProducts = getRandomSuggestedProducts(product);

    return (
        <BreakpointProvider>
            <div className="flex flex-col gap-20">
                <div id="image-description-container" className="flex flex-col gap-8">
                    <div id="product-image-container" className="px-12 pt-10 pb-16 rounded-lg bg-zinc-100">
                        <Image src={product.productDetailImage} alt="product image" className="w-full" />
                    </div>
                    <div id="product-description-container" className="flex flex-col gap-6">
                        <ProductDescription name={product.name} productType={product.productType} description={product.description} />
                        <PriceComponent price={product.price} productId={product.productId} />
                    </div>
                </div>
                <ProductFeatures features={product.features} />
                <BoxContent items={product.boxContent} />
                <FeaturedImages images={product.featuredImages} />
                <SuggestedProductCard products={suggestedProducts} />
            </div>
        </BreakpointProvider>
    )
}