'use client'

import { useTransition } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext";
import type { CartActionButtonProps } from "@/app/utilities/library/definitions";

export default function CartActionButton({ productId, quantity, isInCart }: CartActionButtonProps) {
    const { fetchCart } = useCartContext();
    const [isPending, startTransition] = useTransition();

    function handleClick() {
        startTransition(async () => {
            try {
                const endpoint = isInCart ? '/api/remove-from-cart' : '/api/add-to-cart';
                const method = 'POST';
                const body = isInCart
                    ? JSON.stringify({ productId })
                    : JSON.stringify({ productId, quantity });

                await fetch(endpoint, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body,
                });

                await fetchCart();
            } catch (err) {
                console.error(`Failed to ${isInCart ? 'remove' : 'add'} item:`, err);
            }
        });
    }

    return (
        <button
            disabled={isPending}
            onClick={handleClick}
            className="flex justify-center items-center w-40 h-12 text-xs font-bold tracking-wide text-white bg-darkorange uppercase"
        >
            {isPending
                ? isInCart
                    ? 'Removing...'
                    : 'Adding...'
                : isInCart
                    ? 'Remove Item'
                    : 'Add to Cart'
            }
        </button>
    );
}