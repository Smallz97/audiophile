import Image from "next/image"
import Pics from "../../../../public/images/featured-products-images/ZX7/mobile-zx7.png"

export default function ZX7() {
    return (
        <div className="relative">
            <div className="flex flex-col gap-8 absolute top-1/2 left-6 -translate-y-1/2">
                <div className="text-2xl font-bold tracking-widest text-black uppercase">ZX7 SPEAKER</div>
                <div className="flex justify-center items-center w-40 h-12 border border-black">
                    <div className="text-xs font-bold tracking-wide text-black uppercase">See Product</div>
                </div>
            </div>
            <Image src={Pics} alt="" className="w-full rounded-lg" />
        </div>
    )
}