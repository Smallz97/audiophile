import ZX9 from "@/app/components/featured-products/ZX9";
import ZX7 from "@/app/components/featured-products/ZX7";
import YX1 from "@/app/components/featured-products/YX1";

export default function FeaturedProducts() {
    return (
        <section id="promo-banners-section" className="flex flex-col gap-6 bg-green-300">
            <ZX9 />
            <ZX7 />
            <YX1 />
        </section>
    )
}