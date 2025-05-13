import type { ProductPageCounterButtonProps } from "@/app/utilities/library/definitions";

export default function ProductPageCounterButton({
    min = 1,
    max = 20,
    count,
    setCount,
    isPending,
    onIncrement,
    onDecrement,
}: ProductPageCounterButtonProps) {

    const decrement = () => {
        if (count > min) {
            if (onDecrement) onDecrement();
            else if (setCount) setCount(count - 1);
        }
    };

    const increment = () => {
        if (count < max) {
            if (onIncrement) onIncrement();
            else if (setCount) setCount(count + 1);
        }
    };

    return (
        <div className="flex justify-between items-center px-4 w-32 h-12 bg-zinc-100 border">
            <button
                onClick={decrement}
                disabled={count <= min || isPending}
                className="text-xs font-bold tracking-wide text-black uppercase opacity-25 cursor-pointer"
            >
                -
            </button>
            <div className="text-xs font-bold tracking-wide text-black uppercase">{count}</div>
            <button
                onClick={increment}
                disabled={count >= max || isPending}
                className="text-xs font-bold tracking-wide text-black uppercase opacity-25 cursor-pointer"
            >
                +
            </button>
        </div>
    );
}
