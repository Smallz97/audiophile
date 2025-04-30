'use client'

import { useState } from "react";
import { useCartModal } from "@/app/utilities/contexts/ModalContexts"
import { formatPrice } from "@/app/utilities/library/price-utilities"
import { PriceComponentProps } from "@/app/utilities/library/definitions"
import AddToCartButton from '@/app/utilities/ui/components/buttons/AddToCartButton'
import ProductPageCounterButton from "@/app/utilities/ui/components/buttons/ProductPageCounterButton"

export default function PriceComponent({ price, productId }: PriceComponentProps) {
    const { cart } = useCartModal()
    const inCart = cart.items.some(item => item.productId === productId);

    const formattedPrice = formatPrice(price);
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="text-lg font-bold tracking-wider text-black uppercase">{formattedPrice}</div>
            <div className="flex gap-4">
                <ProductPageCounterButton count={quantity} setCount={setQuantity} />
                {inCart ? (
                    <button
                        disabled
                        className={`flex justify-center items-center w-40 h-12 text-xs font-bold tracking-wide text-white bg-gray-300 uppercase`}
                    >
                        in Cart
                    </button>
                ) : (
                    <AddToCartButton productId={productId} quantity={quantity} />
                )}
            </div >
        </>
    )
}