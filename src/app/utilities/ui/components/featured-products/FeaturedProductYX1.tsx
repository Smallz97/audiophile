import LinkButton from "@/app/utilities/ui/components/buttons/link-buttons/LinkButton";
import mobileImg from "../../../../../../public/images/featured-products-images/YX1/mobile-yx1.png"
import tabletImg from "../../../../../../public/images/featured-products-images/YX1/tablet-yx1.png"
import desktopImg from "../../../../../../public/images/featured-products-images/YX1/desktop-yx1.png"
import FeaturedProductResponsiveImage from "@/app/utilities/ui/components/utility-components/FeaturedProductResponsiveImage";


export default function FeaturedProductYX1() {
    return (
        <div className="flex flex-col gap-6 md:gap-[0.69rem] md:flex-row">
            <FeaturedProductResponsiveImage
                alt="YX1 Earphones"
                className="w-full rounded-lg flex-1"
                srcSet={{ mobile: mobileImg, tablet: tabletImg, desktop: desktopImg }}
            />
            <div className="flex flex-col items-start justify-center gap-8 py-[2.56rem] md:py-[6.31rem] pl-[6.78%] md:pl-[6.17%] lg:pl-[8.69%] rounded-lg bg-zinc-100 flex-1">
                <div className="text-2xl font-bold tracking-widest text-black uppercase">YX1 EARPHONES</div>
                <LinkButton
                    href={`/earphones/YX1 Wireless`}
                    className={`text-xs font-bold tracking-wider text-black border border-black`}
                >
                    see product
                </LinkButton>
            </div>
        </div>
    )
}