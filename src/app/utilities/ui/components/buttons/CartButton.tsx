"use client"

import { useState } from "react"
import { ShoppingCartIcon } from "@/app/utilities/ui/icons";
import type { CartWithProducts } from "@/app/utilities/library/definitions";
import CartModal from "@/app/utilities/ui/components/cart-modal/CartModal";


export default function CartButton({ initialCartData }: { initialCartData: CartWithProducts }) {
    const [isCartOpen, setIsCartOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsCartOpen(true)} aria-label="Open cart">
                <div className="flex w-6 h-5"><ShoppingCartIcon /></div>
            </button>
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={initialCartData.items} />
        </>
    )
}