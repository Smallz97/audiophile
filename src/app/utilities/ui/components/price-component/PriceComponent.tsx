import { formatPrice } from "@/app/utilities/library/price-utilities"
import { PriceComponentProps } from "@/app/utilities/library/definitions"
import { CartModalProvider } from "@/app/utilities/contexts/ModalContexts"
import CounterButton from "@/app/utilities/ui/components/buttons/CounterButton"
import AddToCartButton from '@/app/utilities/ui/components/buttons/AddToCartButton'

export default function PriceComponent({ price, productId }: PriceComponentProps) {
    const formattedPrice = formatPrice(price);

    return (
        <>
            <div className="text-lg font-bold tracking-wider text-black uppercase">{formattedPrice}</div>
            <div className="flex gap-4">
                <CounterButton />
                <CartModalProvider>
                    <AddToCartButton productId={productId} />
                </CartModalProvider>
            </div >
        </>
    )
}