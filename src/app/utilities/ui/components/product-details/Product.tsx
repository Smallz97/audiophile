import Image from "next/image"
import { ProductDetailsProps } from "@/app/utilities/library/definitions"
import CounterButton from "@/app/utilities/ui/components/buttons/CounterButton"

export default function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <div className="flex flex-col gap-20">
            <div id="image-description-container" className="flex flex-col gap-8">
                <div id="product-image-container" className="px-12 pt-10 pb-16 rounded-lg bg-zinc-100">
                    <Image src={product.image} alt="" className="w-full" />
                </div>
                <div id="product-description-container" className="flex flex-col gap-6">
                    <div className="text-3xl font-bold tracking-wider text-black uppercase">
                        {product.name}<br />{product.productType}
                    </div>
                    <div className="text-base font-normal leading-normal text-black opacity-50">
                        {product.description}
                    </div>
                    <div className="text-lg font-bold tracking-wider text-black uppercase">$ 899</div>
                    <div className="flex gap-4">
                        <CounterButton />
                        <div className="flex justify-center items-center w-40 h-12 bg-darkorange">
                            <div className="text-xs font-bold tracking-wide text-white uppercase">add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="product-features-container" className="flex flex-col gap-6">
                <div id="container-title" className="text-2xl font-bold leading-9 tracking-wider text-black uppercase">features</div>
                <div className="text-base font-normal leading-normal text-black opacity-50">
                    {product.features.map((paragraph, index) => (
                        <span key={index}>
                            {paragraph}
                            {index !== product.features.length - 1 && <><br /><br /></>}
                        </span>
                    ))}
                </div>
            </div>
            <div id="in-the-box-container" className="flex flex-col gap-6">
                <div id="container-title" className="text-2xl font-bold leading-9 tracking-wide text-black uppercase">in the box</div>
                <div id="box-contents-container" className="flex flex-col gap-2">
                    <div id="box-content" className="flex gap-6">
                        <div className="text-base font-bold leading-normal text-darkorange">1x</div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 capitalize">headphone unit</div>
                    </div>
                    <div id="box-content" className="flex gap-6">
                        <div className="text-base font-bold leading-normal text-darkorange">2x</div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 capitalize">replacement earcups</div>
                    </div>
                    <div id="box-content" className="flex gap-6">
                        <div className="text-base font-bold leading-normal text-darkorange">1x</div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 capitalize">user manual</div>
                    </div>
                    <div id="box-content" className="flex gap-6">
                        <div className="text-base font-bold leading-normal text-darkorange">1x</div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 capitalize">3.5mm 5m Audio Cable</div>
                    </div>
                </div>
            </div>
            <div id="product-images-container" className=""></div>
        </div>
    )
}