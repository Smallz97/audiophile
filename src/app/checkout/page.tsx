import GoBackButton from "@/app/utilities/ui/components/buttons/navigation-buttons/GoBack";
import CheckoutFormWrapper from "@/app/utilities/ui/components/checkout-form/CheckoutFormWrapper";

export default async function Checkout() {

    return (
        <div
            className="flex flex-col px-fluid md:px-fluid lg:px-fluid pt-4 md:pt-8 lg:pt-[4.94rem] pb-24 md:pb-[7.25rem] lg:pb-[9.56rem] gap-6 md:gap-[2.37rem] lg:gap-[3.5rem]"
        >
            <GoBackButton />
            <CheckoutFormWrapper />
        </div>
    )
}