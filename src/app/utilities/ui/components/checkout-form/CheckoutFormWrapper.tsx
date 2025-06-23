import CheckoutForm from "@/app/utilities/ui/components/checkout-form/CheckoutForm";
import { CheckoutFormContextProvider } from "@/app/utilities/contexts/CheckoutFormContext";
import ClientCartRedirect from "@/app/utilities/ui/components/checkout-form/ClientCartRedirect";

export default function CheckoutFormWrapper() {
    return (
        <CheckoutFormContextProvider>
            <ClientCartRedirect />
            <CheckoutForm />
        </CheckoutFormContextProvider>
    );
}