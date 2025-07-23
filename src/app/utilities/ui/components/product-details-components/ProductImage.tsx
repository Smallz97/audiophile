import Image from "next/image";
import type { ProductImageProps } from "@/app/utilities/library/definitions";

export default function ProductImage({ image }: ProductImageProps) {
    return (
        <div
            id="product-image-container"
            className="max-lg:w-full lg:w-[48.64%]"
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