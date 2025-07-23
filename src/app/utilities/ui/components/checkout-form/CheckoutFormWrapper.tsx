"use client"

import CheckoutForm from "@/app/utilities/ui/components/checkout-form/CheckoutForm";
import { CheckoutFormContextProvider } from "@/app/utilities/contexts/CheckoutFormContext";

export default function CheckoutFormWrapper() {
    return (
        <CheckoutFormContextProvider>
            <CheckoutForm />
        </CheckoutFormContextProvider>
    );
}