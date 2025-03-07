import ProductOverview from "@/app/components/product-overview/ProductOverview";

export default function ProductOverviewPage() {
    return (
        <div className="">
            <section id="navigation-button" className="px-6 py-4">
                <h3 className="font-base font-normal leading-normal text-black opacity-50">Go back</h3>
            </section>
            <section className="px-6 py-4">
                <ProductOverview />
            </section>
        </div>
    )
}