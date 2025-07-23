import LinkButton from "@/app/utilities/ui/components/buttons/link-buttons/LinkButton";
import mobileImg from "../../../../../../public/images/featured-products-images/ZX7/mobile-zx7.png"
import tabletImg from "../../../../../../public/images/featured-products-images/ZX7/tablet-zx7.png"
import desktopImg from "../../../../../../public/images/featured-products-images/ZX7/desktop-zx7.png"
import FeaturedProductResponsiveImage from "@/app/utilities/ui/components/utility-components/FeaturedProductResponsiveImage";

export default function FeaturedProductZX7() {
    return (
        <div className="relative">
            <div className="flex flex-col gap-8 absolute top-1/2 left-[6.78%] md:left-[9.24%] lg:left-[8.69%] -translate-y-1/2">
                <div className="text-2xl font-bold tracking-widest text-black uppercase">ZX7 SPEAKER</div>
                <LinkButton
                    href={`/speakers/ZX7`}
                    className={`text-xs font-bold tracking-wider text-black border border-black`}
                >
                    see product
                </LinkButton>
            </div>
            <FeaturedProductResponsiveImage
                alt="ZX7 Speaker"
                className="w-full rounded-lg"
                srcSet={{ mobile: mobileImg, tablet: tabletImg, desktop: desktopImg }}
            />
        </div>
    )
}