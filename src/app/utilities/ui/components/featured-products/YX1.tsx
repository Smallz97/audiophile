import Button from "@/app/utilities/ui/components/buttons/cta-buttons/Button";
import ResponsiveImage from "@/app/utilities/ui/components/utility-components/ResponsiveImage";
import mobileImg from "../../../../../../public/images/featured-products-images/YX1/mobile-yx1.png"
import tabletImg from "../../../../../../public/images/featured-products-images/YX1/tablet-yx1.png"


export default function YX1() {
    return (
        <div className="flex flex-col gap-6 md:gap-[0.69rem] md:flex-row">
            <ResponsiveImage
                alt="YX1 Earphones"
                className="w-full rounded-lg flex-1"
                srcSet={{ mobile: mobileImg, tablet: tabletImg }}
            />
            <div className="flex flex-col items-start justify-center gap-8 py-10 md:py-24 pl-6 md:pl-10 rounded-lg bg-zinc-100 flex-1">
                <div className="text-2xl font-bold tracking-widest text-black uppercase">YX1 EARPHONES</div>
                <Button
                    href={`/earphones/YX1 Wireless`}
                    className={`text-xs font-bold tracking-wider text-black border border-black`}
                >
                    see product
                </Button>
            </div>
        </div>
    )
}