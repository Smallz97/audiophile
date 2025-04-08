'use client'
import { useEffect } from "react"
import type { CheckoutModalProps } from "@/app/utilities/library/definitions"

export default function CartModal({ isOpen, onClose, items }: CheckoutModalProps) {
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscapeKey)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey)
            document.body.style.overflow = 'auto'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
            <div className="absolute inset-0 bg-black/50 px-6 pt-28 pb-6 overflow-y-auto" onClick={onClose} aria-hidden="true">

                <div className="relative z-10 max-w-md rounded-lg bg-white p-6 py-8 shadow-lg flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold tracking-wider uppercase text-black">cart (3)</div>
                        <div className="text-base font-normal leading-normal opacity-50 text-black underline ">Remove all</div>
                    </div>

                    {items.length === 0 ? (
                        <p className="py-4 text-center text-gray-500">Your cart is empty</p>
                    ) : (
                        <>
                            <ul className="divide-y">
                                {items.map((item) => (
                                    <li key={item.id} className="py-3">
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                            </div>
                                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between font-bold mb-4">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <button className={`text-xs font-bold tracking-wide text-white uppercase bg-darkorange w-full h-12`}>checkout</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    )
}