import Image from "next/image";
import Button from "@/app/utilities/ui/components/buttons/cta-buttons/Button";
import { ProductsListProps } from "@/app/utilities/library/definitions";

export default function ProductsCategoryList({ productsList }: ProductsListProps) {
    return (
        <section id="production-overview-section" className="flex flex-col gap-[7.5rem]">
            {productsList.map((product, index) => (
                <div key={index} className="flex flex-col gap-8 md:gap-12">
                    <div className="flex justify-center px-12 md:px-64 pt-10 pb-16 md:pb-12 rounded-lg bg-zinc-100">
                        <Image
                            width={220}
                            height={243}
                            alt="overview image"
                            src={product.overviewImage}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6 md:gap-8 md:w-4/5 md:self-center">
                        {product.newProduct && (
                            <div className="text-sm font-normal tracking-widest text-darkorange text-center uppercase">
                                NEW PRODUCT
                            </div>
                        )}
                        <div className="text-3xl md:text-4xl font-bold md:leading-10 tracking-wider text-black text-center uppercase">
                            {product.name}<br />{product.productType}
                        </div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 text-center">
                            {product.description}
                        </div>
                        <Button href={`/${product.productType}/${product.name}`} className={`text-xs font-bold tracking-wider text-white bg-darkorange`}>
                            see product
                        </Button>
                    </div>
                </div>
            ))}
        </section>
    );
}