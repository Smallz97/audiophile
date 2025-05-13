import Image from "next/image"
import Button from "@/app/utilities/ui/components/buttons/cta-buttons/Button"
import { SuggestedProductCardProps } from "@/app/utilities/library/definitions"

export default function SuggestedProductCard({ products }: SuggestedProductCardProps) {
    return (
        <div className="flex flex-col gap-10">
            <div className="text-2xl font-bold uppercase leading-9 tracking-wide text-center text-black">
                you may also like
            </div>
            <div className="flex flex-col gap-8">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col gap-8">
                        <div className="flex justify-center items-center h-28 bg-zinc-100 rounded-lg">
                            <Image src={product.suggestedProductCardImages} alt="" />
                        </div>
                        <div className="flex flex-col gap-8 items-center">
                            <div className="text-xl font-bold uppercase tracking-widest text-center text-black">
                                {product.name}
                            </div>
                            <Button
                                href={`/${product.productType}/${product.name}`}
                                className={`text-xs font-bold tracking-wide text-white bg-darkorange`}
                            >
                                see product
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}