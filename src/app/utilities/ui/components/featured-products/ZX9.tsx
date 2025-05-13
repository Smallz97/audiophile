import Button from "@/app/utilities/ui/components/buttons/cta-buttons/Button";
import tabletImg from "../../../../../../public/images/featured-products-images/ZX9/tablet-zx9.png"
import mobileImg from "../../../../../../public/images/featured-products-images/ZX9/mobile-zx9.png"
import ResponsiveImage from "@/app/utilities/ui/components/utility-components/ResponsiveImage";

export default function ZX9() {
    return (
        <div className="flex flex-col items-center gap-8 md:gap-16 py-14 md:pt-13 md:pb-16 px-6 md:px-40 bg-darkorange rounded-lg relative overflow-hidden">
            <div className="w-80 md:w-[542px] h-80 md:h-[542px] rounded-full border absolute top-0 md:-top-20 opacity-25" />
            <div className="w-72 md:w-[472px] h-72 md:h-[472px] rounded-full border border-white absolute top-4 md:-top-12 opacity-25 bg-yellow-300" />
            <div className="w-96 md:w-[944px] h-96 md:h-[944px] rounded-full border border-white absolute md:bottom-16 [clip-path:inset(50%_0_0_0)] opacity-25" />
            <ResponsiveImage
                alt="ZX9 Speaker"
                srcSet={{ mobile: mobileImg, tablet: tabletImg }}
            />
            <div className="flex flex-col items-center gap-6 md:gap-10">
                <div className="flex-col items-center gap-6" id="text-wrapper">
                    <div
                        className="text-4xl md:text-6xl font-bold leading-10 md:leading-[58px] tracking-wider md:tracking-widest text-white text-center uppercase"
                    >
                        ZX9<br />SPEAKER
                    </div>
                    <div className="text-base font-normal leading-normal text-white opacity-75 text-center">
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </div>

                </div>
                <Button
                    href={`/speakers/ZX9`}
                    className={`text-xs font-bold tracking-wider text-white bg-black border border-black z-10`}
                >
                    see product
                </Button>
            </div>
        </div>
    )
}