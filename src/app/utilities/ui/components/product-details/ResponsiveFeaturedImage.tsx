"use client"

import Image from "next/image"
import { useBreakpoint } from "@/app/utilities/library/BreakpointContext"
import type { ResponsiveFeaturedImagesProps } from "@/app/utilities/library/definitions"

export default function ResponsiveFeaturedImages({
    images,
    containerClassName = "flex flex-col gap-5",
    className = "w-full rounded-lg",
}: ResponsiveFeaturedImagesProps) {
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
            <Image src={imageSet.first} alt="First featured image" className={className} />
            <Image src={imageSet.second} alt="Second featured image" className={className} />
            <Image src={imageSet.third} alt="Third featured image" className={className} />
        </div>
    )
}