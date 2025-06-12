import { useTransition } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext";
import type { CartModalCounterButtonProps } from "@/app/utilities/library/definitions";

export default function CartModalCounterButton({ item }: CartModalCounterButtonProps) {
    const { fetchCart } = useCartContext();
    const quantityInStock = item.product.numberInStock;
    const [isPending, startTransition] = useTransition();

    function updateItemQuantity(productId: string, change: number) {
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

    return (
        <div className="flex items-center">
            <div className="flex items-center border bg-zinc-100">
                <button
                    disabled={isPending}
                    className="py-1 px-2"
                    onClick={() => updateItemQuantity(item.productId, -1)}
                >
                    -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                    className="py-1 px-2"
                    onClick={() => updateItemQuantity(item.productId, 1)}
                    disabled={item.quantity >= quantityInStock || isPending}
                >
                    +
                </button>
            </div>
        </div>
    );
}