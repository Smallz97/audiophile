import Image from "next/image";
import type { ProductImageProps } from "@/app/utilities/library/definitions";

export default function ProductImage({ image }: ProductImageProps) {
    return (
        <div
            id="product-image-container"
            className="flex px-20 pt-[3.44rem] md:pt-[8.81rem] lg:pt-[4.08rem] pb-[4.45rem] md:pb-[9.12rem] lg:pb-[6.81rem] rounded-lg bg-zinc-100 md:w-2/5"
        >
            <Image
                src={image}
                width={250}
                height={250}
                alt="product image"
            />
        </div>
    )
}