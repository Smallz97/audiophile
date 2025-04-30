import type { ProductPageCounterButtonProps } from "@/app/utilities/library/definitions";

export default function ProductPageCounterButton({ count, setCount, min = 0, max = 20 }: ProductPageCounterButtonProps) {

    const decrement = () => {
        if (count > min) setCount(count - 1);
    };

    const increment = () => {
        if (count < max) setCount(count + 1);
    };

    return (
        <div className="flex justify-between items-center px-4 w-32 h-12 bg-zinc-100 border">
            <button
                className="text-xs font-bold tracking-wide text-black uppercase opacity-25 cursor-pointer"
                onClick={decrement}
                disabled={count <= min}
            >
                -
            </button>
            <div className="text-xs font-bold tracking-wide text-black uppercase">{count}</div>
            <button
                className="text-xs font-bold tracking-wide text-black uppercase opacity-25 cursor-pointer"
                onClick={increment}
                disabled={count >= max}
            >
                +
            </button>
        </div>
    );
}
