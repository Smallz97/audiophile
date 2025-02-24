import Image from "next/image"
import Pics from "../../../../public/images/product-overview-images/XX99-mobile.png"
export default function ProductOverview() {
    return (
        <div className="flex flex-col gap-8">
            <div className="px-12 pt-10 pb-16 rounded-lg bg-zinc-100">
                <Image src={Pics} alt="" className="w-full" />
            </div>
            <div className="flex-col justify-center items-center gap-6 flex">
                <div className="text-sm font-normal tracking-widest text-darkorange text-center uppercase">
                    NEW PRODUCT
                </div>
                <div className="text-3xl font-bold tracking-wider text-black text-center uppercase ">
                    XX99 Mark II<br />Headphones
                </div>
                <div className="text-base font-normal leading-normal text-black opacity-50 text-center">
                    The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                </div>
                <div className="flex justify-center items-center w-40 h-12 bg-darkorange">
                    <div className="text-xs font-bold tracking-wide text-white uppercase">See Product</div>
                </div>
            </div>
        </div>
    )
}