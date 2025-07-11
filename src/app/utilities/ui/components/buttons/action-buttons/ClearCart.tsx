import { useTransition } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext";

export default function ClearCart() {
    const { fetchCart } = useCartContext();
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
            className="text-base font-normal leading-normal opacity-50 text-black hover:underline p-0 m-0 bg-transparent border-none"
        >
            {isPending ? 'Clearing...' : 'Remove all'}
        </button>
    );
}