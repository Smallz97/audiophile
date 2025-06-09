'use client'

import { useTransition } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext";
import type { AddToCartButtonProps } from "@/app/utilities/library/definitions";

export default function AddToCartButton({ productId, quantity }: AddToCartButtonProps) {
    const { fetchCart } = useCartContext();
    const [isPending, startTransition] = useTransition();

    async function handleAddToCart(productId: string) {
        try {
            await fetch('/api/add-to-cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId, quantity }),
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