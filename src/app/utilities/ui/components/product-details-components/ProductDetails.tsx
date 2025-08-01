import type { ProductDetailsProps } from "@/app/utilities/library/definitions"
import { getRandomSuggestedProducts } from "@/app/utilities/functions-and-utilities/utility-functions"
import BoxContent from "@/app/utilities/ui/components/product-details-components/BoxContents"
import ProductImage from "@/app/utilities/ui/components/product-details-components/ProductImage"
import PriceComponent from "@/app/utilities/ui/components/product-details-components/PriceComponent"
import ProductFeatures from "@/app/utilities/ui/components/product-details-components/ProductFeatures"
import ProductDescription from "@/app/utilities/ui/components/product-details-components/ProductDescription"
import SuggestedProductCard from "@/app/utilities/ui/components/product-details-components/SuggestedProductCard"
import ProductFeaturedImagesComponent from "@/app/utilities/ui/components/product-details-components/ProductFeaturedImagesComponent"

export default function ProductDetails({ product }: ProductDetailsProps) {
    const suggestedProducts = getRandomSuggestedProducts(product);

    return (
        <div className="flex flex-col gap-20 md:gap-[7.5rem]">
            <div
                id="image-description-price-container"
                className="flex flex-col md:flex-row gap-8 md:gap-[4.34rem] lg:gap-0 lg:justify-between"
            >
                <ProductImage image={product.productDetailImage} />
                <div
                    id="product-description-price-container"
                    className="flex flex-col gap-6 md:justify-center max-lg:w-full lg:w-[40.13%]"
                >
                    <ProductDescription
                        name={product.name}
                        productType={product.productType}
                        description={product.description}
                    />
                    <PriceComponent
                        price={product.price}
                        productId={product.productId}
                        quantityInStock={product.numberInStock}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-20 md:gap-[7.5rem] lg:flex-row lg:gap-fluid">
                <ProductFeatures features={product.features} />
                <BoxContent items={product.boxContent} />
            </div>
            <ProductFeaturedImagesComponent featuredImages={product.featuredImages} />
            <SuggestedProductCard products={suggestedProducts} />
        </div>
    )
}