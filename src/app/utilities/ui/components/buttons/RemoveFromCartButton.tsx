import { useTransition } from "react";
import { useCartModal } from "@/app/utilities/contexts/ModalContexts";
import type { RemovefromCartButtonProps } from "@/app/utilities/library/definitions";

export default function RemoveFromCartButton({ productId }: RemovefromCartButtonProps) {
    const { fetchCart } = useCartModal();
    const [isPending, startTransition] = useTransition();

    async function handleRemoveFromCart(productId: string) {
        try {
            await fetch('/api/remove-from-cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
            onClick={() => startTransition(() => handleRemoveFromCart(productId))}
            className={`flex justify-center items-center w-40 h-12 text-xs font-bold tracking-wide text-white bg-darkorange uppercase`}
        >
            {isPending ? 'removing item...' : 'remove item'}
        </button>
    )
}