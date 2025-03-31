import Link from "next/link";
import Image from "next/image"
import { HamburgerIcon } from "@/app/utilities/ui/icons"
import { productCategories } from '@/app/utilities/library/data'
import { CategoriesListProps } from "@/app/utilities/library/definitions";


function ProductsCategoryCard({ categories }: CategoriesListProps) {
    return (
        <section id="production-category-section" className="flex flex-col gap-16">
            {categories.map((product, index) => (
                <div className="relative" key={index}>
                    <Image src={product.categoryImage} alt="" className="drop-shadow-2xl absolute -top-1/4 left-1/2 -translate-x-1/2" />
                    <div className="w-full bg-zinc-100 rounded-lg flex flex-col items-center pt-24 pb-5">
                        <div className="flex flex-col gap-4 items-center">
                            <div id="category-name" className="text-black text-base font-bold tracking-wide uppercase">{product.category}</div>
                            <Link href={`/${product.category}`} id="category-link" className="flex justify-center items-center gap-2 bg-blue-200">
                                <div className="text-xs font-bold tracking-wide text-black opacity-50 uppercase">
                                    shop
                                </div>
                                <div className="flex justify-center items-center w-2 h-2"><HamburgerIcon /></div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default function ProductCategoriesList({ path }: { path: string | undefined }) {
    const displayedCategories = productCategories.filter(p => p.category !== path);

    return <ProductsCategoryCard categories={displayedCategories} />;
}