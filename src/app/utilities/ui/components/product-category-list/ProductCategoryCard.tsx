import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/app/utilities/ui/icons";
import type { ProductCategoryCardProps } from "@/app/utilities/library/definitions";

function ProductCategoryCard({ category }: ProductCategoryCardProps) {
    return (
        <div className="relative w-full">
            <Image
                alt="category image"
                src={category.categoryImage}
                className="drop-shadow-2xl absolute -top-1/4 left-1/2 -translate-x-1/2"
            />
            <div className="w-full bg-zinc-100 rounded-lg flex flex-col items-center pt-24 pb-5">
                <div className="flex flex-col gap-4 items-center">
                    <div className="text-black text-base font-bold tracking-wider uppercase">
                        {category.categoryName}
                    </div>
                    <Link
                        href={`/${category.categoryName}`}
                        className="flex justify-center items-center gap-2"
                    >
                        <div className="text-xs md:text-sm font-bold tracking-wider text-black opacity-50 uppercase">
                            shop
                        </div>
                        <div className="w-[0.3125rem] h-[0.625rem] flex-shrink-0">
                            <Arrow />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProductCategoryCard);
