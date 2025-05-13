'use client'

import { useState, useEffect, useTransition } from "react";
import { useCartModal } from "@/app/utilities/contexts/CartContext"
import { formatPrice } from "@/app/utilities/library/price-utilities"
import { PriceComponentProps } from "@/app/utilities/library/definitions"
import AddToCartButton from '@/app/utilities/ui/components/buttons/product-page-buttons/AddToCartButton'
import RemoveFromCartButton from "@/app/utilities/ui/components/buttons/product-page-buttons/RemoveFromCartButton";
import ProductPageCounterButton from "@/app/utilities/ui/components/buttons/product-page-buttons/ProductPageCounterButton"

export default function PriceComponent({ price, productId }: PriceComponentProps) {
    const { cart, fetchCart } = useCartModal()
    const item = cart.items.find(item => item.productId === productId);
    const itemInCart = item !== undefined;

    const formattedPrice = formatPrice(price);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!itemInCart) {
            setQuantity(1);
        }
    }, [itemInCart]);

    const [isPending, startTransition] = useTransition();

    function updateItemQuantity(change: number) {
        startTransition(async () => {
            try {
                await fetch('/api/update-item-quantity', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ productId, change }),
                });
                fetchCart();
            } catch (err) {
                console.error('Failed to update item quantity:', err);
            }
        });
    }

    return (
        <>
            <div className="text-lg font-bold tracking-wider text-black uppercase">{formattedPrice}</div>
            {itemInCart ? (
                <div className="flex gap-4">
                    <ProductPageCounterButton
                        isPending={isPending}
                        count={item.quantity}
                        onIncrement={() => updateItemQuantity(1)}
                        onDecrement={() => updateItemQuantity(-1)}
                    />
                    <RemoveFromCartButton productId={productId} />
                </div>
            ) : (
                <div className="flex gap-4">
                    <ProductPageCounterButton count={quantity} setCount={setQuantity} />
                    <AddToCartButton productId={productId} quantity={quantity} />
                </div>
            )}
        </>
    )
}