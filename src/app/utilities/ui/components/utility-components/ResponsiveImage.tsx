"use client"

import Image from "next/image";
import { useBreakpoint } from "@/app/utilities/contexts/BreakpointContext";
import { ResponsiveImageProps } from "@/app/utilities/library/definitions";

export default function ResponsiveImage({ srcSet, ...rest }: ResponsiveImageProps) {
    const breakpoint = useBreakpoint()

    let src;

    if (breakpoint === "sm") {
      src = srcSet.mobile
    } else if (breakpoint === "md") {
      src = srcSet.tablet
    } else {
      src = srcSet.desktop || srcSet.tablet
    }
    return <Image src={src} {...rest} />
}