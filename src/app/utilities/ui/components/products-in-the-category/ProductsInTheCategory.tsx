import { ProductsInASingleCategory } from "@/app/utilities/library/definitions";
import ProductOverview from "@/app/utilities/ui/components/products-in-the-category/ProductOverviewCard";

export default function ProductsInTheCategory({ products }: ProductsInASingleCategory) {
    return (
        <section id="products-overview-section" className="flex flex-col gap-[7.5rem] lg:gap-[10rem]">
            {products.map((product, index) => (
                <ProductOverview key={index} product={product} index={index} />
            ))}
        </section>
    );
}