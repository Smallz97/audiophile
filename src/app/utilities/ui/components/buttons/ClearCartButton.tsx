import { useTransition } from "react";
import { useCartModal } from "@/app/utilities/contexts/ModalContexts";

export default function ClearCartButton() {
    const { fetchCart } = useCartModal();
    const [isPending, startTransition] = useTransition();

    async function handleClearCart() {
        try {
            await fetch('/api/clear-cart', {
                method: 'POST',
            });
            fetchCart();
        } catch (err) {
            console.error('Failed to clear cart:', err);
        }
    }

    return (
        <button
            disabled={isPending}
            onClick={() => startTransition(() => handleClearCart())}
            className="text-base font-normal leading-normal opacity-50 text-black underline"
        >
            {isPending ? 'Clearing...' : 'Remove all'}
        </button>
    );
}