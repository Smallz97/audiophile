import Button from "@/app/utilities/ui/components/buttons/Button"
import CounterButton from "@/app/utilities/ui/components/buttons/CounterButton"

export default function PriceComponent() {
    return (
        <>
            <div className="text-lg font-bold tracking-wider text-black uppercase">$ 899</div>
            <div className="flex gap-4">
                <CounterButton />
                <Button href={`/`} className={`text-xs font-bold tracking-wide text-white bg-darkorange`}>add to cart</Button>
            </div>
        </>
    )
}