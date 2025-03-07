import { ProductsListProps } from "@/app/utilities/library/definitions";
import Image from "next/image";

export default function ProductsList({ products }: ProductsListProps) {
    return (
        <section id="production-overview-section" className="flex flex-col gap-28 px-6 mt-16 mb-28 bg-blue-300">
            {products.map((product, index) => (
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
                        <div className="flex justify-center items-center w-40 h-12 bg-darkorange">
                            <div className="text-xs font-bold tracking-wide text-white uppercase">See Product</div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}