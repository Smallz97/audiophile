import ProductOverview from "@/app/components/product-details/ProductDetails";

export default function ProductOverviewPage({ params, }: { params: Promise<{ slug: string, product: string }> }) {
    return (
        <div className="flex flex-col px-6">
            <section id="navigation-button" className="">
                <h3 className="font-base font-normal leading-normal text-black opacity-50">Go back</h3>
            </section>
            <section className="px-6 py-4">
                <ProductOverview />
            </section>
        </div>
    )
}