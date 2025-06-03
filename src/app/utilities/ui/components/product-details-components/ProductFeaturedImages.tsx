"use client"

import Image from "next/image"
import { useBreakpoint } from "@/app/utilities/contexts/BreakpointContext"
import type { ProductFeaturedImagesProps } from "@/app/utilities/library/definitions"

export default function ProductFeaturedImages({
    images,
    containerClassName = "flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-2",
    className = "w-full rounded-lg",
}: ProductFeaturedImagesProps) {
    const breakpoint = useBreakpoint()

    let imageSet
    if (breakpoint === "sm") {
        imageSet = images.mobile
    } else if (breakpoint === "md") {
        imageSet = images.tablet
    } else {
        imageSet = images.desktops
    }

    return (
        <div className={containerClassName}>
            <Image
                src={imageSet.first}
                alt="First featured image"
                className={`${className} md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2`}
            />
            <Image
                src={imageSet.second}
                alt="Second featured image"
                className={`${className} md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2`}
            />
            <Image
                src={imageSet.third}
                alt="Third featured image"
                className={`${className} md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3 h-full`}
            />
        </div>
    )
}