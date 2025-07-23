import { useTransition } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext";
import { useCustomModalContext } from "@/app/utilities/contexts/CustomModalContext";
import type { CartModalCounterButtonProps } from "@/app/utilities/library/definitions";


export default function CartModalCounterButton({ item }: CartModalCounterButtonProps) {
    const { fetchCart } = useCartContext();
    const quantityInStock = item.product.numberInStock;
    const [isPending, startTransition] = useTransition();
    const { setContent, openModal: openAlertDialog } = useCustomModalContext();

    function updateItemQuantity(productId: string, change: number) {
        startTransition(async () => {
            try {
                await fetch('/api/update-item-quantity', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ productId, change }),
                });
                fetchCart();
            } catch (error) {
                const action = change > 0 ? 'increase' : 'decrease';
                const readableAction = change > 0 ? 'increasing' : 'decreasing';

                const message =
                    error instanceof Error
                        ? `Failed to ${action} item quantity: ${error.message}`
                        : `Unexpected error occurred while ${readableAction} product's quantity`;

                setContent(message);
                openAlertDialog();
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