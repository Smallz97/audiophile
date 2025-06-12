'use client'

import Image from "next/image"
import { useEffect } from "react"
import { ShoppingCartIcon } from "@/app/utilities/ui/icons"
import { useCartContext } from "@/app/utilities/contexts/CartContext"
import LinkButton from "@/app/utilities/ui/components/buttons/link-buttons/LinkButton"
import ClearCartButton from "@/app/utilities/ui/components/cart-modal/buttons/ClearCartButton"
import CartModalCounterButton from "@/app/utilities/ui/components/cart-modal/buttons/CartModalCounterButton"

export default function CartModal() {
    const { isModalOpen, closeModal, cart } = useCartContext()

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModal()
        }

        if (isModalOpen) {
            document.addEventListener("keydown", handleEscapeKey)
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey)
        }
    }, [isModalOpen, closeModal])

    if (!isModalOpen) return null

    const items = cart.items
    const total = cart.formattedTotalPrice
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/50"
        >
            <div
                className="px-6 pt-28 pb-6 flex md:justify-end"
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`relative z-10 md:w-96 w-full rounded-lg bg-white px-[1.75rem] md:px-[2.06rem] py-8 shadow-lg flex flex-col gap-8 max-h-[calc(100dvh-8rem)] md:max-h-[calc(100vh-19rem)]`}
                >
                    {items.length > 0 && (
                        <div className="flex items-center justify-between">
                            <div className="text-lg font-bold tracking-wider uppercase text-black">
                                cart ({totalItems})
                            </div>
                            <ClearCartButton />
                        </div>
                    )}
                    <div
                        className={`overflow-y-auto flex flex-col gap-6 ${items.length === 0 ? "bg-zinc-100 justify-center items-center h-[calc(50vh-3rem)] md:h-96" : ""}`}
                    >
                        {items.length > 0 ? (
                            items.map((item) => (
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
                                                {item.product.formattedPrice}
                                            </div>
                                        </div>
                                        <CartModalCounterButton item={item} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col justify-center items-center gap-2">
                                <div className="flex w-10 h-10 flex-shrink-0">
                                    <ShoppingCartIcon />
                                </div>
                                <div className="text-center opacity-50 text-lg">Your cart is empty.</div>
                            </div>
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="flex justify-between font-medium uppercase">
                            <p className="opacity-50">Total</p>
                            <p>{total}</p>
                        </div>
                    )}

                    {items.length > 0 ? (
                        <LinkButton
                            href={`/checkout`}
                            onClick={closeModal}
                            className="w-full bg-darkorange py-3 text-sm font-medium text-white uppercase">
                            checkout
                        </LinkButton>
                    ) :
                        <button
                            onClick={closeModal}
                            className="w-full bg-darkorange py-3 text-sm font-medium text-white uppercase"
                        >
                            add items
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}