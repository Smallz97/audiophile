import { productCategories } from "@/app/utilities/library/data";
import type { CurrentPath } from "@/app/utilities/library/definitions";
import ProductCategoryCard from "@/app/utilities/ui/components/product-category-list/ProductCategoryCard";

export default function ProductCategoriesList({ path }: CurrentPath) {
    const displayedCategories = productCategories.filter(p => p.categoryName !== path);

    return (
        <section
            id="product-categories-section"
            className="flex flex-col gap-16 md:flex-row md:gap-2.5 lg:gap-[1.87rem]"
        >
            {displayedCategories.map((category, index) => (
                <ProductCategoryCard key={index} category={category} />
            ))}
        </section>
    );
}