import LinkButton from "@/app/utilities/ui/components/buttons/link-buttons/LinkButton";
import tabletImg from "../../../../../../public/images/featured-products-images/ZX9/tablet-zx9.png"
import mobileImg from "../../../../../../public/images/featured-products-images/ZX9/mobile-zx9.png"
import desktopImg from "../../../../../../public/images/featured-products-images/ZX9/desktop-zx9.png"

import FeaturedProductResponsiveImage from "@/app/utilities/ui/components/utility-components/FeaturedProductResponsiveImage";

export default function FeaturedProductZX9() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-16 lg:gap-[12.45%] py-14 md:py-0 md:pt-14 lg:pt-0 md:pb-16 lg:pb-0 px-6 md:px-40 lg:px-0 lg:pl-[10.57%] bg-darkorange rounded-lg relative overflow-hidden">
            <div className="w-80 md:w-[542px] h-80 md:h-[542px] rounded-full border absolute top-0 md:-top-20 lg:top-[10.31rem] lg:left-[4.68%] opacity-25" />
            <div className="w-72 md:w-[472px] h-72 md:h-[472px] rounded-full border border-white absolute top-4 md:-top-12 lg:top-[12.5rem] lg:left-[7.84%] opacity-25" />
            <div className="w-96 md:w-[944px] h-96 md:h-[944px] rounded-full border border-white absolute md:bottom-16 lg:bottom-0 [clip-path:inset(50%_0_0_0)] lg:[clip-path:none] lg:-left-[13.41%] lg:-top-[2.25rem] opacity-25" />

            <FeaturedProductResponsiveImage
                alt="ZX9 Speaker"
                className="lg:w-[36.96%] lg:mt-24 z-10"
                srcSet={{ mobile: mobileImg, tablet: tabletImg, desktop: desktopImg }}
            />
            <div className="flex flex-col items-center lg:items-start gap-6 md:gap-10 lg:w-[36.43%] lg:mt-[8.31rem] z-10">
                <div className="flex flex-col max-lg:items-center gap-6 text-center lg:text-left" id="text-wrapper">
                    <div
                        className="text-4xl md:text-6xl font-bold leading-10 md:leading-[58px] tracking-wider md:tracking-widest text-white uppercase"
                    >
                        ZX9<br />SPEAKER
                    </div>
                    <div className="text-base font-normal leading-normal text-white opacity-75">
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </div>

                </div>
                <LinkButton
                    href={`/speakers/ZX9`}
                    className={`text-xs font-bold tracking-wider text-white bg-black border border-black`}
                >
                    see product
                </LinkButton>
            </div>
        </div>
    )
}