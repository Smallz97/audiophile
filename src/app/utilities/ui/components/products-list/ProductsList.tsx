import Image from "next/image";
import Button from "@/app/utilities/ui/components/buttons/Button";
import { ProductsListProps } from "@/app/utilities/library/definitions";

export default function ProductsList({ productsList }: ProductsListProps) {
    return (
        <section id="production-overview-section" className="flex flex-col gap-[7.5rem]">
            {productsList.map((product, index) => (
                <div key={index} className="flex flex-col gap-8">
                    <div className="px-12 pt-10 pb-16 rounded-lg bg-zinc-100">
                        <Image src={product.image} alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        {product.newProduct && (
                            <div className="text-sm font-normal tracking-widest text-darkorange text-center uppercase">
                                NEW PRODUCT
                            </div>
                        )}
                        <div className="text-3xl font-bold tracking-wider text-black text-center uppercase">
                            {product.name}<br />{product.productType}
                        </div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 text-center">
                            {product.description}
                        </div>
                        <Button href={`/${product.productType}/${product.name}`} className={`text-xs font-bold tracking-wide text-white bg-darkorange`}>
                            see product
                        </Button>
                    </div>
                </div>
            ))}
        </section>
    );
}