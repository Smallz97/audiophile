import mobileImg from "../../../../../../public/images/promotion-card-images/copyright-mobile.png"
import tabletImg from "../../../../../../public/images/promotion-card-images/copyright-tablet.png"
import ResponsiveImage from "@/app/utilities/ui/components/utility-components/FeaturedProductResponsiveImage";

export default function PromotionCard() {
    return (
        <section id="promotion-section" className="flex flex-col gap-8">
            <ResponsiveImage
                className="w-full rounded-lg"
                alt="image of a person wearing headphones"
                srcSet={{ mobile: mobileImg, tablet: tabletImg }}
            />
            <div className="text-center text-black">
                <span className="text-2xl md:text-4xl font-bold md:leading-10 tracking-wider uppercase">Bringing you the </span>
                <span className="text-2xl md:text-4xl font-bold md:leading-10 tracking-wider text-darkorange uppercase ">best </span>
                <span className="text-2xl md:text-4xl font-bold md:leading-10 tracking-wider uppercase">audio gear</span>
            </div>
            <div className="text-base font-normal leading-normal text-black opacity-50 text-center">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </div>
        </section>
    )
}