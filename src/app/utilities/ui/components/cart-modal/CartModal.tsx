'use client'

import Image from "next/image"
import { useEffect } from "react"
import { useCartModal } from "@/app/utilities/contexts/ModalContexts"
import type { CartModalProps } from "@/app/utilities/library/definitions"

export default function CartModal({ cart }: CartModalProps) {
    const { isOpen, closeModal } = useCartModal()

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModal()
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscapeKey)
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey)
        }
    }, [isOpen, closeModal])

    const items = cart.items

    const totalAmount = items.reduce((sum, item) => {
        return sum + item.product.price.amount * item.quantity;
    }, 0);

    const totalPrice = items.length > 0
        ? { amount: totalAmount, currency: items[0].product.price.currency }
        : { amount: 0, currency: 'USD' };

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
            {/* The modal wrapper */}
            <div
                className="absolute inset-0 bg-black/50 px-6 pt-28 pb-6 flex md:justify-end"
                onClick={closeModal}
                aria-hidden="true"
            >
                {/* The actual modal component */}
                <div
                    className="relative z-10 max-w-md w-full rounded-lg bg-white p-6 py-8 shadow-lg flex flex-col gap-8"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold tracking-wider uppercase text-black">
                            cart ({items.length})
                        </div>
                        <button className="text-base font-normal leading-normal opacity-50 text-black underline">
                            Remove all
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="overflow-y-auto flex flex-col gap-6">
                        {items.map((item) => (
                            <div
                                key={item.productId}
                                className="flex w-full gap-4 items-center"
                            >
                                <div className="h-16 w-16 border flex justify-center items-center bg-zinc-100 rounded-lg">
                                    {item.product.image && (
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            width={64}
                                            height={64}
                                        />
                                    )}
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col">
                                        <div className="text-black text-base font-bold leading-normal">
                                            {item.product.name}
                                        </div>
                                        <div className="opacity-50 text-black text-sm font-bold leading-normal">
                                            {totalAmount}
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center border bg-zinc-100">
                                            <button className="py-1 px-2">-</button>
                                            <span className="px-2">{item.quantity}</span>
                                            <button className="py-1 px-2">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="flex justify-between font-medium uppercase">
                        <p>Total</p>
                        <p>{totalAmount}</p>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-darkorange py-3 text-sm font-medium text-white uppercase">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}