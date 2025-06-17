import Link from "next/link";
import CheckoutFormWrapper from "@/app/utilities/ui/components/checkout-form/CheckoutFormWrapper";

export default function Checkout() {
    return (
        <div
            className="flex flex-col px-6 md:px-[2.44rem] lg:px-[10.31rem] pt-12 md:pt-24 lg:pt-32 pb-[6.6rem] md:pb-24 lg:pb-[12.5rem] gap-8"
        >
            <Link
                href={`/`}
                className="mb-6"
            >
                <div className="opacity-50 text-black text-base font-normal leading-normal">Go back</div>
            </Link>
            <CheckoutFormWrapper />
        </div>
    )
}