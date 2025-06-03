import Image from "next/image"
import Button from "@/app/utilities/ui/components/buttons/cta-buttons/Button"
import { SuggestedProductCardProps } from "@/app/utilities/library/definitions"

export default function SuggestedProductCard({ products }: SuggestedProductCardProps) {
    return (
        <div className="flex flex-col gap-10 md:gap-14">
            <div className="text-2xl md:text-3xl font-bold uppercase leading-9 tracking-wide text-center text-black">
                you may also like
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-2.5">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col gap-8 flex-1">
                        <div
                            className="flex justify-center pt-[0.75rem] md:pt-16 pb-[0.81rem] md:pb-16 md:h-80 bg-zinc-100 rounded-lg md:px-[2.3rem]"
                        >
                            <Image
                                width={120}
                                height={120}
                                alt="suggested product"
                                src={product.suggestedProductCardImages}
                            />
                        </div>
                        <div className="flex flex-col gap-8 items-center">
                            <div className="text-xl font-bold uppercase tracking-widest text-center text-black">
                                {product.name}
                            </div>
                            <Button
                                href={`/${product.productType}/${product.name}`}
                                className={`text-xs font-bold tracking-wider text-white bg-darkorange`}
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