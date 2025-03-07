
import Image from "next/image"
import Pics from "../../../../public/images/featured-products-images/ZX9/mobile-zx9.png"
export default function ZX9() {
    return (
        <div className="flex flex-col items-center gap-8 py-14 px-6 bg-darkorange rounded-lg relative overflow-hidden">
            <div className="w-80 h-80 rounded-full border border-white absolute top-0 opacity-25" />
            <div className="w-72 h-72 rounded-full border border-white absolute top-4 opacity-25" />
            <div className="w-96 h-96 rounded-full border border-white absolute [clip-path:inset(50%_0_0_0)] opacity-25" />
            <Image src={Pics} alt="" />
            <div className="flex flex-col items-center gap-4">
                <div className="text-4xl font-bold leading-10 tracking-wider text-white text-center uppercase">
                    ZX9<br />SPEAKER
                </div>
                <div className="text-base font-normal leading-normal text-white opacity-75 text-center">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </div>
                <div className="flex justify-center items-center w-40 h-12 border border-black bg-black">
                    <div className="text-xs font-bold tracking-wide text-white uppercase">See Product</div>
                </div>
            </div>
        </div>
    )
}