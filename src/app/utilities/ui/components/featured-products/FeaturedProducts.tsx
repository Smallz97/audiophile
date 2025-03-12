import ZX9 from "@/app/utilities/ui/components/featured-products/ZX9";
import ZX7 from "@/app/utilities/ui/components/featured-products/ZX7";
import YX1 from "@/app/utilities/ui/components/featured-products/YX1";

export default function FeaturedProducts() {
    return (
        <section id="featured-products-section" className="flex flex-col gap-6">
            <ZX9 />
            <ZX7 />
            <YX1 />
        </section>
    )
}