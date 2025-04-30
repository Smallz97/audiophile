import { useTransition } from "react";
import { useCartModal } from "@/app/utilities/contexts/ModalContexts";
import type { CartModalCounterButtonProps } from "@/app/utilities/library/definitions";

export default function CartModalCounterButton({ item }: CartModalCounterButtonProps) {
    const { fetchCart } = useCartModal();
    const [isPending, startTransition] = useTransition();

    async function updateItemQuantity(productId: string, change: number) {
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
    }

    return (
        <div className="flex items-center">
            <div className="flex items-center border bg-zinc-100">
                <button
                    disabled={isPending}
                    className="py-1 px-2"
                    onClick={() => startTransition(() => updateItemQuantity(item.productId, -1))}
                >
                    -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                    disabled={isPending}
                    className="py-1 px-2"
                    onClick={() => startTransition(() => updateItemQuantity(item.productId, 1))}
                >
                    +
                </button>
            </div>
        </div>
    );
}