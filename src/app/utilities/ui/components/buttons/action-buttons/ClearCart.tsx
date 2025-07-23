import { useTransition } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext";
import { useCustomModalContext } from "@/app/utilities/contexts/CustomModalContext";

export default function ClearCart() {
    const { fetchCart, closeModal: closeCartModal } = useCartContext();
    const { openModal: openAlertDialog, setContent } = useCustomModalContext();
    const [isPending, startTransition] = useTransition();

    async function handleClearCart() {
        try {
            const response = await fetch('/api/clear-cart', { method: 'POST', });

            if (!response.ok) throw new Error("Request to clear cart failed");

            await fetchCart();

            closeCartModal();
            setContent(`Cart has been cleared successfully!`);
            openAlertDialog();
        } catch (error) {
            closeCartModal();
            const message =
                error instanceof Error
                    ? error.message
                    : "Something went wrong while clearing the cart.";
            setContent(`Failed to clear cart: ${message}`);
            openAlertDialog();
        }
    }

    return (
        <button
            type="button"
            disabled={isPending}
            onClick={() => startTransition(() => handleClearCart())}
            className="text-base font-normal leading-normal opacity-50 text-black hover:underline p-0 m-0 bg-transparent border-none"
        >
            {isPending ? 'Clearing...' : 'Remove all'}
        </button>
    );
}