'use client'

import { useTransition } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext";
import type { ProductPageCounterButtonProps } from "@/app/utilities/library/definitions";

export default function ProductPageCounterButton({
    min,
    isInCart,
    quantity,
    productId,
    setQuantity,
    quantityInStock
}: ProductPageCounterButtonProps) {
    const { fetchCart } = useCartContext();
    const [isPending, startTransition] = useTransition();

    function updateItemQuantity(change: number) {
        startTransition(async () => {
            try {
                await fetch('/api/update-item-quantity', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ productId, change }),
                });
                fetchCart();
            } catch (err) {
                console.error('Failed to update item quantity:', err);
            }
        });
    }

    const decrement = () => {
        if (quantity > min) {
            isInCart ? updateItemQuantity(-1) : setQuantity(quantity - 1);
        }
    };

    const increment = () => {
        if (quantity < quantityInStock) {
            isInCart ? updateItemQuantity(1) : setQuantity(quantity + 1);
        }
    };

    return (
        <div className="flex justify-between items-center px-4 w-32 h-12 bg-zinc-100 border">
            <button
                onClick={decrement}
                disabled={quantity <= min || isPending}
                className="text-xs font-bold tracking-wide text-black uppercase opacity-25 cursor-pointer"
            >
                -
            </button>
            <div className="text-xs font-bold tracking-wide text-black uppercase">{quantity}</div>
            <button
                onClick={increment}
                disabled={quantity >= quantityInStock || isPending}
                className="text-xs font-bold tracking-wide text-black uppercase opacity-25 cursor-pointer"
            >
                +
            </button>
        </div>
    );
}
