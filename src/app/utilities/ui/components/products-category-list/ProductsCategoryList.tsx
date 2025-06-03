import Image from "next/image";
import Button from "@/app/utilities/ui/components/buttons/cta-buttons/Button";
import { ProductsListProps } from "@/app/utilities/library/definitions";

export default function ProductsCategoryList({ productsList }: ProductsListProps) {
    return (
        <section id="production-overview-section" className="flex flex-col gap-[7.5rem] lg:gap-[10rem]">
            {productsList.map((product, index) => (
                <div key={index} className={`flex flex-col items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 lg:gap-[7.81rem]`}>
                    <div className="flex justify-center max-md:px-12 w-full pt-10 lg:pt-20 pb-16 md:pb-20 rounded-lg bg-zinc-100 lg:flex-1">
                        <Image
                            width={250}
                            height={250}
                            alt="overview image"
                            src={product.overviewImage}
                        />
                    </div>
                    <div className="flex flex-col gap-6 w-full lg:gap-10 md:max-lg:w-3/5 max-lg:items-center max-lg:text-center lg:flex-1">
                        <div
                            id="product-name-description"
                            className="flex flex-col gap-6 md:gap-4"
                        >
                            {product.newProduct && (
                                <div className="text-sm font-normal tracking-widest text-darkorange uppercase">
                                    NEW PRODUCT
                                </div>
                            )}
                            <div className="flex flex-col gap-6 md:gap-8">
                                <div className="text-3xl md:text-4xl font-bold md:leading-10 tracking-wider text-black uppercase">
                                    {product.name}<br />{product.productType}
                                </div>
                                <div className="text-base font-normal leading-normal text-black opacity-50">
                                    {product.description}
                                </div>
                            </div>
                        </div>
                        <Button href={`/${product.productType}/${product.name}`} className={`text-xs font-bold tracking-wider text-white bg-darkorange flex`}>
                            see product
                        </Button>
                    </div>
                </div>
            ))}
        </section>
    );
}