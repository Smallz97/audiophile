import Image from "next/image"
import { Arrow } from "@/app/utilities/library/icons"
import Pics from "../../../../public/images/product-category-images/speakers-mobile.png"
export default function ProductCategoryCard() {
    return (
        <div className="relative">
            <Image src={Pics} alt="" className="drop-shadow-2xl absolute -top-1/4 left-1/2 -translate-x-1/2" />
            <div className="w-full bg-zinc-100 rounded-lg flex flex-col items-center pt-24 pb-5">
                <div className="flex flex-col gap-4 items-center">
                    <div id="category-name" className="text-black text-base font-bold tracking-wide uppercase">headphones</div>
                    <div id="category-link" className="flex justify-center items-center gap-2">
                        <div className="text-xs font-bold tracking-wide text-black opacity-50 uppercase">shop</div>
                        <div className="flex justify-center items-center w-1.5 h-2.5"><Arrow /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}