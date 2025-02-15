import Image from "next/image"
import { Arrow } from "../../../../public/icons"
import Pics from "../../../../public/category-headphone.png"
export default function Category() {
    return (
        <div className="flex flex-col items-center">
            <Image src={Pics} alt="" className="translate-y-1/2 drop-shadow-2xl" />
            <div className="w-full h-40 bg-zinc-100 rounded-lg flex flex-col items-center">
                <div className="flex flex-col gap-4 items-center mt-20">
                    <div id="category-name" className="text-foreground text-base font-bold uppercase tracking-wide">headphones</div>
                    <div id="category-link" className="flex justify-center items-center gap-2">
                        <div className="opacity-50 text-black text-xs font-bold uppercase tracking-wide">shop</div>
                        <div className="flex justify-center items-center w-1.5 h-2.5"><Arrow /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}