import type { ProductFeaturesProps } from "@/app/utilities/library/definitions";

export default function ProductFeatures({ features }: ProductFeaturesProps) {
    return (
        <div id="product-features-container" className="flex flex-col gap-6 md:gap-8 lg:w-3/5">
            <div id="title" className="text-2xl md:text-3xl font-bold leading-9 tracking-wider text-black uppercase">
                features
            </div>
            <div className="text-base font-normal leading-normal text-black opacity-50">
                {features.map((paragraph, index) => (
                    <span key={index}>
                        {paragraph}
                        {index !== features.length - 1 && (
                            <>
                                <br />
                                <br />
                            </>
                        )}
                    </span>
                ))}
            </div>
        </div>
    )
}