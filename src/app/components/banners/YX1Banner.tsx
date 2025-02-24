import Image from "next/image"
import Pics from "../../../../public/images/banner-images/YX1/mobile-yx1.png"
export default function YX1banner() {
    return (
        <div className="flex flex-col gap-6">
            <Image src={Pics} alt="" className="w-full rounded-lg" />
            <div className="flex flex-col items-start justify-center gap-8 py-10 pl-6 rounded-lg bg-zinc-100">
                <div className="text-2xl font-bold tracking-widest text-black uppercase">YX1 EARPHONES</div>
                <div className="flex justify-center items-center w-40 h-12 border border-black">
                    <div className="text-xs font-bold tracking-wide text-black uppercase">See Product</div>
                </div>
            </div>
        </div>
    )
}