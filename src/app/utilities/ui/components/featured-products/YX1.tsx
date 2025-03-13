import Image from "next/image"
import Button from "@/app/utilities/ui/components/buttons/Button";
import Pics from "../../../../../../public/images/featured-products-images/YX1/mobile-yx1.png"

export default function YX1() {
    return (
        <div className="flex flex-col gap-6">
            <Image src={Pics} alt="" className="w-full rounded-lg" />
            <div className="flex flex-col items-start justify-center gap-8 py-10 pl-6 rounded-lg bg-zinc-100">
                <div className="text-2xl font-bold tracking-widest text-black uppercase">YX1 EARPHONES</div>
                <Button href={`/earphones/YX1 Wireless`} className={`text-xs font-bold tracking-wide text-black border border-black`}>
                    see product
                </Button>
            </div>
        </div>
    )
}