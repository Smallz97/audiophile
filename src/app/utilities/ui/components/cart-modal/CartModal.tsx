'use client'

import Image from "next/image"
import { useEffect } from "react"
import { useCartContext } from "@/app/utilities/contexts/CartContext"
import { formatPrice } from "@/app/utilities/functions-and-utilities/price-utilities"
import ClearCart from "@/app/utilities/ui/components/buttons/action-buttons/ClearCart"
import LinkButton from "@/app/utilities/ui/components/buttons/link-buttons/LinkButton"
import CartModalCounterButton from "@/app/utilities/ui/components/buttons/counter-buttons/CartModalCounterButton"

export default function CartModal() {
    const { isModalOpen: isCartOpen, closeModal: closeCartModal, cart } = useCartContext()

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeCartModal()
        }

        if (isCartOpen) {
            document.addEventListener("keydown", handleEscapeKey)
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey)
        }
    }, [isCartOpen, closeCartModal])

    if (!isCartOpen) return null

    const items = cart.items
    const total = formatPrice({ amount: cart.totalPrice })
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div
            onClick={closeCartModal}
            id="modal-opaque-backdrop"
            className="fixed inset-0 z-50 bg-black/50"
        >
            <div
                id="modal-wrapper"
                className={`px-6 pt-28 flex md:justify-end`}
            >
                <div
                    id="modal"
                    onClick={(e) => e.stopPropagation()}
                    className={`relative z-10 rounded-lg bg-white px-[1.75rem] md:px-[2.06rem] py-8 shadow-lg flex flex-col gap-8 w-full max-h-[calc(100dvh-8rem)] md:max-h-[calc(100dvh-13rem)] md:w-[49.08vw] lg:w-[26.18vw]`}
                >
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold tracking-wider uppercase text-black">
                            cart ({totalItems})
                        </div>
                        <ClearCart />
                    </div>
                    <div
                        id="modal-content"
                        className={`overflow-y-auto flex flex-col gap-6`}
                    >
                        {items.map((item) => (
                            <div
                                key={item.productId}
                                className="flex w-full gap-4 items-center"
                            >
                                <div className="h-16 w-16 p-2 border flex justify-center items-center bg-zinc-100 rounded-lg">
                                    {item.product.image && (
                                        <Image
                                            width={36}
                                            height={40}
                                            alt={`img`}
                                            src={item.product.image}
                                        />
                                    )}
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col">
                                        <div
                                            title={item.product.name}
                                            className="text-black text-base font-bold leading-normal max-w-[80px] truncate whitespace-nowrap min-[390px]:max-w-none min-[390px]:whitespace-normal"
                                        >
                                            {item.product.name}
                                        </div>
                                        <div className="opacity-50 text-black text-sm md:text-lg font-bold leading-normal">
                                            {formatPrice({ amount: item.product.price })}
                                        </div>
                                    </div>
                                    <CartModalCounterButton item={item} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between font-medium uppercase">
                        <p className="opacity-50">Total</p>
                        <p>{total}</p>
                    </div>
                    <LinkButton
                        href={`/checkout`}
                        onClick={closeCartModal}
                        className="w-full bg-darkorange py-3 text-sm font-medium text-white uppercase">
                        checkout
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}