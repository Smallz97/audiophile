import Button from "@/app/utilities/ui/components/buttons/Button"
import { formatPrice } from "@/app/utilities/library/price-utilities"
import { PriceComponentProps } from "@/app/utilities/library/definitions"
import CounterButton from "@/app/utilities/ui/components/buttons/CounterButton"

export default function PriceComponent({ price }: PriceComponentProps) {
    const formattedPrice = formatPrice(price);

    return (
        <>
            <div className="text-lg font-bold tracking-wider text-black uppercase">{formattedPrice}</div>
            <div className="flex gap-4">
                <CounterButton />
                <Button href={`/`} className={`text-xs font-bold tracking-wide text-white bg-darkorange`}>add to cart</Button>
            </div>
        </>
    )
}