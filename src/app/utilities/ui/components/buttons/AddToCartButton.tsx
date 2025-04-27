'use client'

import { useTransition } from "react";
import { useCartModal } from "@/app/utilities/contexts/ModalContexts";
import type { AddToCartButtonProps } from "@/app/utilities/library/definitions";

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { fetchCart } = useCartModal();
    const [isPending, startTransition] = useTransition();

    async function handleAddToCart(productId: string) {
        try {
            await fetch('/api/cart', {
                method: 'POST',
                body: JSON.stringify({ productId }),
            });

            fetchCart();
        } catch (err) {
            console.error('Failed to add to cart:', err);
        }
    }

    return (
        <button
            disabled={isPending}
            onClick={() => startTransition(() => handleAddToCart(productId))}
            className={`flex justify-center items-center w-40 h-12 text-xs font-bold tracking-wide text-white bg-darkorange uppercase`}
        >
            {isPending ? 'Adding...' : 'Add to Cart'}
        </button>
    );
}