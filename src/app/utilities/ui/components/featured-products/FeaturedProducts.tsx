import FeaturedProductZX9 from "@/app/utilities/ui/components/featured-products/FeaturedProductZX9";
import FeaturedProductZX7 from "@/app/utilities/ui/components/featured-products/FeaturedProductZX7";
import FeaturedProductYX1 from "@/app/utilities/ui/components/featured-products/FeaturedProductYX1";

export default function FeaturedProducts() {
    return (
        <section id="featured-products-section" className="flex flex-col gap-6 md:gap-8">
            <FeaturedProductZX9 />
            <FeaturedProductZX7 />
            <FeaturedProductYX1 />
        </section>
    )
}