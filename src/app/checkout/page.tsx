import { cookies } from "next/headers";
import { ServerCart } from "@/app/utilities/library/definitions";
import GoBackButton from "@/app/utilities/ui/components/buttons/navigation-buttons/GoBack";
import CheckoutFormWrapper from "@/app/utilities/ui/components/checkout-form/CheckoutFormWrapper";

export default async function Checkout() {
    let cart: ServerCart = { items: [] };
    const cookieStore = await cookies()
    const cartCookie = cookieStore.get('cart')

    try {
        if (cartCookie) {
            cart = JSON.parse(cartCookie.value);
        }
    } catch (err) {
        cart = { items: [] };
        console.error("Invalid cart cookie:", err);
    }

    if (cart.items.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold">Your cart is empty.</p>
            </div>
        )
    }

    return (
        <div
            className="flex flex-col px-6 md:px-[2.44rem] lg:px-[10.31rem] pt-4 md:pt-8 lg:pt-[4.94rem] pb-24 md:pb-[7.25rem] lg:pb-[9.56rem] gap-6 md:gap-[2.37rem] lg:gap-[3.5rem]"
        >
            <GoBackButton />
            <CheckoutFormWrapper />
        </div>
    )
}