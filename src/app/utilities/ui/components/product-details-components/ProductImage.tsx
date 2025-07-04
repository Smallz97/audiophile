import Image from "next/image";
import type { ProductImageProps } from "@/app/utilities/library/definitions";

export default function ProductImage({ image }: ProductImageProps) {
    return (
        <div
            id="product-image-container"
            className="w-full lg:w-3/5"
        >
            <div className="h-[20.44rem] px-[2rem] py-[3rem] md:h-[30rem] md:max-lg:px-16 md:max-lg:py-36 lg:h-[35rem] lg:p-32 rounded-lg bg-zinc-100">
                <div className="relative w-full h-full">
                    <Image
                        fill
                        src={image}
                        alt="product image"
                    />
                </div>
            </div>
        </div>
    )
}

// min-[390px]:h-[25rem]
// flex px-20 pt-[3.44rem] md:pt-[8.81rem] lg:pt-[4.08rem] pb-[4.45rem] md:pb-[9.12rem] lg:pb-[6.81rem] max-md:w-2/5