import { handleCheckoutAction } from "@/app/utilities/library/actions";
import CheckoutForm from "@/app/utilities/ui/components/checkout-form/CheckoutForm";

export default function CheckoutFormWrapper() {
    return (
        <CheckoutForm action={handleCheckoutAction} />
    );
}