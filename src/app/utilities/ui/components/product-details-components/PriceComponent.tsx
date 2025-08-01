'use client'

import { useState, useEffect } from "react";
import { useCartContext } from "@/app/utilities/contexts/CartContext"
import { formatPrice } from "@/app/utilities/functions-and-utilities/price-utilities"
import { PriceComponentProps } from "@/app/utilities/library/definitions"
import CartActionButton from "@/app/utilities/ui/components/buttons/action-buttons/CartActionButton"
import ProductPageCounterButton from "@/app/utilities/ui/components/buttons/counter-buttons/ProductPageCounterButton"

export default function PriceComponent({ price, productId, quantityInStock }: PriceComponentProps) {
    const { cart } = useCartContext();
    const item = cart.items.find(item => item.productId === productId);
    const itemInCart = item !== undefined;

    const min = 1;
    const numberInStock = quantityInStock;
    const formattedPrice = formatPrice({ amount: price });
    const [quantity, setQuantity] = useState(min);

    useEffect(() => {
        if (!itemInCart) {
            setQuantity(min);
        }
    }, [itemInCart]);

    return (
        <>
            <div className="text-lg font-bold tracking-wider text-black uppercase">{formattedPrice}</div>
            <div className="flex gap-4">
                <ProductPageCounterButton
                    min={min}
                    isInCart={itemInCart}
                    productId={productId}
                    setQuantity={setQuantity}
                    quantityInStock={numberInStock}
                    quantity={itemInCart ? item.quantity : quantity}
                />
                <CartActionButton
                    quantity={quantity}
                    isInCart={itemInCart}
                    productId={productId}
                />
            </div>
        </>
    )
}