import Image from "next/image"
import PriceComponent from "./PriceComponent"
import type { ProductDetailsProps } from "@/app/utilities/library/definitions"
import { getRandomSuggestedProducts } from "@/app/utilities/library/functions"
import { BreakpointProvider } from "@/app/utilities/library/BreakpointContext"
import BoxContent from "@/app/utilities/ui/components/product-details/BoxContents"
import ResponsiveProductImages from "@/app/utilities/ui/components/product-details/ResponsiveFeaturedImage"
import SuggestedProductCard from "@/app/utilities/ui/components/suggested-products/SuggestedProductCard"

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
                        <div className="text-3xl font-bold tracking-wider text-black uppercase">
                            {product.name}
                            <br />
                            {product.productType}
                        </div>
                        <p className="text-base font-normal leading-normal text-black opacity-50">{product.description}</p>
                        <PriceComponent />
                    </div>
                </div>
                <div id="product-features-container" className="flex flex-col gap-6">
                    <div id="title" className="text-2xl font-bold leading-9 tracking-wider text-black uppercase">
                        features
                    </div>
                    <div className="text-base font-normal leading-normal text-black opacity-50">
                        {product.features.map((paragraph, index) => (
                            <span key={index}>
                                {paragraph}
                                {index !== product.features.length - 1 && (
                                    <>
                                        <br />
                                        <br />
                                    </>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
                <BoxContent items={product.boxContent} />
                <ResponsiveProductImages images={product.featuredImages} />
                <SuggestedProductCard products={suggestedProducts} />
            </div>
        </BreakpointProvider>
    )
}