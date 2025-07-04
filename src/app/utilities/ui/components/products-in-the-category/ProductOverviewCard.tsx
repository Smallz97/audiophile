
import React from "react";
import Image from "next/image";
import type { ProductOverviewCardProps } from "@/app/utilities/library/definitions";
import LinkButton from "@/app/utilities/ui/components/buttons/link-buttons/LinkButton";

function ProductOverviewCard({ product, index }: ProductOverviewCardProps) {
    const isReversed = index % 2 !== 0;

    return (
        <div className={`flex flex-col items-center ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 lg:gap-fluid`}>
            <div className="w-full lg:w-3/5">
                <div
                    className="h-[22rem] min-[390px]:h-[28rem] px-[2rem] py-[3rem] md:max-lg:px-60 md:max-lg:py-12 lg:h-[35rem] lg:p-32 rounded-lg bg-zinc-100"
                >
                    <div className="relative w-full h-full">
                        <Image
                            fill={true}
                            alt="overview image"
                            src={product.overviewImage}
                        />
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col gap-6 w-full lg:gap-10 md:max-lg:w-3/5 items-center lg:items-start text-center lg:text-left lg:w-2/5"
            >
                <div id="product-name-description" className="flex flex-col gap-6 md:gap-4">
                    {product.newProduct && (
                        <div className="text-sm font-normal tracking-widest text-darkorange uppercase">
                            NEW PRODUCT
                        </div>
                    )}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div className="text-3xl md:text-4xl font-bold md:leading-10 tracking-wider text-black uppercase">
                            {product.name}<br />{product.productType}
                        </div>
                        <div className="text-base font-normal leading-normal text-black opacity-50">
                            {product.description}
                        </div>
                    </div>
                </div>
                <LinkButton
                    href={`/${product.productType}/${product.name}`}
                    className="text-xs font-bold tracking-wider text-white bg-darkorange flex"
                >
                    see product
                </LinkButton>
            </div>
        </div>
    );
}

const ProductOverview = React.memo(ProductOverviewCard);
export default ProductOverview;