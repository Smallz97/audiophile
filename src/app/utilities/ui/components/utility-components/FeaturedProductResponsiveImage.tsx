"use client"

import Image from "next/image";
import { useBreakpoint } from "@/app/utilities/contexts/BreakpointContext";
import { FeaturedProductResponsiveImageProps } from "@/app/utilities/library/definitions";

export default function FeaturedProductResponsiveImage({ srcSet, ...rest }: FeaturedProductResponsiveImageProps) {
  const breakpoint = useBreakpoint()

  let src;

  if (breakpoint === "sm") {
    src = srcSet.mobile
  } else if (breakpoint === "md") {
    src = srcSet.tablet
  } else {
    src = srcSet.desktop || srcSet.tablet
  }
  return <Image src={src} {...rest} alt="image" />
}