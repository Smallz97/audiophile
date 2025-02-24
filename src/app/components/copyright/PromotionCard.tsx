import Image from "next/image"
import Pics from "../../../../public/images/copyright-images/copyright-mobile.png"
export default function PromotionCard() {
    return (
        <div className="flex flex-col gap-8">
            <Image alt="" src={Pics} className="rounded-lg w-full" />
            <div className="text-center text-black">
                <span className="text-2xl font-bold tracking-wide uppercase">Bringing you the </span>
                <span className="text-2xl font-bold tracking-wide text-darkorange uppercase ">best </span>
                <span className="text-2xl font-bold tracking-wide uppercase">audio gear</span>
            </div>
            <div className="text-base font-normal leading-normal text-black opacity-50 text-center">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </div>
        </div>
    )
}