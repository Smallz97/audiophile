'use client'

import { useTransition } from "react";
import { handleAddToCart } from "@/app/utilities/library/functions";
import type { AddToCartButtonProps } from "@/app/utilities/library/definitions";

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
    const [isPending, startTransition] = useTransition();

    return (
        <button
            disabled={isPending}
            onClick={() => handleAddToCart(productId)}
            className={`flex justify-center items-center w-40 h-12 text-xs font-bold tracking-wide text-white bg-darkorange uppercase`}
        >
            {isPending ? 'Adding...' : 'Add to Cart'}
        </button>
    );
}