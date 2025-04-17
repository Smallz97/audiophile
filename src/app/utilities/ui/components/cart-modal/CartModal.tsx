'use client'
import { useEffect } from "react"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import { useCartModal } from "@/app/utilities/contexts/ModalContexts";
import Imago from "../../../../../../public/images/product-images/cart-image-3.png"


export default function CartModal() {
    // Mock data
    const mockCartItems = [
        { id: 1, name: "XX99 MK II", price: 129.99, quantity: 1 },
        { id: 2, name: "XX59", price: 89.99, quantity: 2 },
        { id: 3, name: "YX1", price: 199.99, quantity: 1 },
        { id: 4, name: "ZX9", price: 199.99, quantity: 1 },
        { id: 5, name: "ZX7", price: 199.99, quantity: 1 },
        { id: 6, name: "XX99 MK I", price: 199.99, quantity: 1 },
    ]

    const { isOpen, closeModal } = useCartModal();

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModal();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscapeKey);
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isOpen, closeModal]);

    if (!isOpen) return null;

    const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center">

            {/* The modal wrapper */}
            <div className="absolute inset-0 bg-black/50 px-6 pt-28 pb-6 flex md:justify-end" onClick={closeModal} aria-hidden="true">

                {/* The actual modal component */}
                <div className="relative z-10 max-w-md w-full rounded-lg bg-white p-6 py-8 shadow-lg flex flex-col gap-8" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold tracking-wider uppercase text-black">cart (3)</div>
                        <button className="text-base font-normal leading-normal opacity-50 text-black underline">Remove all</button>
                    </div>

                    {/* Cart Items */}
                    <div className="overflow-y-auto flex flex-col gap-6">
                        {mockCartItems.map((item) => (
                            <div key={item.id} className="flex w-full gap-4 items-center">
                                <div className="h-16 w-16 border flex justify-center items-center bg-zinc-100 rounded-lg">
                                    <Image
                                        src={Imago}
                                        alt={"image"}
                                    />
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col">
                                        <div className="text-black text-base font-bold leading-normal">{item.name}</div>
                                        <div className="opacity-50 text-black text-sm font-bold leading-normal">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center border bg-zinc-100">
                                            <button className="py-1 px-2">
                                                <Minus className="h-8 w-4" />
                                            </button>
                                            <span className="px-2">{item.quantity}</span>
                                            <button className="py-1 px-2">
                                                <Plus className="h-8 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="flex justify-between font-medium uppercase">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-darkorange py-3 text-sm font-medium text-white uppercase">
                        Checkout
                    </button>
                </div>
            </div>
        </div >
    )
}