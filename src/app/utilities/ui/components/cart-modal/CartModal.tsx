'use client'
import { useEffect } from "react"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import { useCartModal } from "@/app/utilities/contexts/ModalContexts";
import Imago from "../../../../../../public/images/product-images/cart-image.png"


export default function CartModal() {
    // Mock data
    const mockCartItems = [
        { id: 1, name: "Minimalist Backpack", price: 129.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
        { id: 2, name: "Wireless Earbuds", price: 89.99, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
        { id: 3, name: "Smart Watch", price: 199.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
        { id: 4, name: "Smart Watch", price: 199.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
        { id: 5, name: "Smart Watch", price: 199.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
        { id: 6, name: "Smart Watch", price: 199.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
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
                                <div className="h-16 w-16 border flex justify-center items-center rounded-lg">
                                    <Image
                                        src={Imago}
                                        alt={"image"}
                                    />
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col">
                                        <p className="text-base font-medium">{item.name}</p>
                                        <p className="text-sm font-medium">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center border rounded-md">
                                            <button className="p-1">
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <span className="px-2">{item.quantity}</span>
                                            <button className="p-1">
                                                <Plus className="h-4 w-4" />
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
                    <button className="w-full rounded-md bg-black h-12 text-sm font-medium text-white hover:bg-black/90">
                        Checkout
                    </button>
                </div>
            </div>
        </div >
    )
}