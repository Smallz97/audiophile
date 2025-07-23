import { useTransition } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext";
import type { CartActionButtonProps } from "@/app/utilities/library/definitions";
import { useCustomModalContext } from "@/app/utilities/contexts/CustomModalContext";

export default function CartActionButton({ productId, quantity, isInCart }: CartActionButtonProps) {
    const { fetchCart } = useCartContext();
    const [isPending, startTransition] = useTransition();
    const { openModal: openAlertDialog, setContent } = useCustomModalContext();

    function handleClick() {
        startTransition(async () => {
            try {
                const method = 'POST';
                const endpoint = isInCart ? '/api/remove-from-cart' : '/api/add-to-cart';
                const body = isInCart ? JSON.stringify({ productId }) : JSON.stringify({ productId, quantity });

                await fetch(endpoint, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body,
                });

                await fetchCart();
            } catch (error) {
                const action = isInCart ? 'remove' : 'add';
                const readableAction = isInCart ? 'removing' : 'adding';
                const message =
                    error instanceof Error
                        ? error.message
                        : `Something went wrong while ${readableAction} the item.`;
                setContent(`Failed to ${action} item from cart: ${message}`);
                openAlertDialog();
            }
        });
    }

    return (
        <button
            type="button"
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