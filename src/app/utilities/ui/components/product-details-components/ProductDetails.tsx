import type { ProductDetailsProps } from "@/app/utilities/library/definitions"
import { getRandomSuggestedProducts } from "@/app/utilities/functions-and-utilities/functions"
import BoxContent from "@/app/utilities/ui/components/product-details-components/BoxContents"
import ProductImage from "@/app/utilities/ui/components/product-details-components/ProductImage"
import PriceComponent from "@/app/utilities/ui/components/product-details-components/PriceComponent"
import ProductFeatures from "@/app/utilities/ui/components/product-details-components/ProductFeatures"
import ProductDescription from "@/app/utilities/ui/components/product-details-components/ProductDescription"
import SuggestedProductCard from "@/app/utilities/ui/components/product-details-components/SuggestedProductCard"
import ProductFeaturedImages from "@/app/utilities/ui/components/product-details-components/ProductFeaturedImages"

export default function ProductDetails({ product }: ProductDetailsProps) {
    const suggestedProducts = getRandomSuggestedProducts(product);

    return (
        <div className="flex flex-col gap-20 md:gap-[7.5rem]">
            <div
                id="image-description-price-container"
                className="flex flex-col md:flex-row gap-8 md:gap-[4.34rem]"
            >
                <ProductImage image={product.productDetailImage} />
                <div
                    id="product-description-price-container"
                    className="flex flex-col gap-6 md:w-3/5 md:pt-[4.88rem] md:pb-[2.81rem]"
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
            <ProductFeatures features={product.features} />
            <BoxContent items={product.boxContent} />
            <ProductFeaturedImages images={product.featuredImages} />
            <SuggestedProductCard products={suggestedProducts} />
        </div>
    )
}