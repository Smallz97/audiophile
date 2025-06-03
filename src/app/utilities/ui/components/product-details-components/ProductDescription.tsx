import type { ProductDescriptionProps } from "@/app/utilities/library/definitions"
export default function ProductDescription({ name, productType, description }: ProductDescriptionProps) {
    return (
        <>
            <div className="text-3xl font-bold tracking-wider text-black uppercase">
                {name}
                <br />
                {productType}
            </div>
            <p className="text-base font-normal leading-normal md:leading-relaxed text-black opacity-50">{description}</p>
        </>
    )
}