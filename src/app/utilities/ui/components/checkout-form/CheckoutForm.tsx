'use client'

import Image from "next/image"
import { useState } from "react"
import { PayOnDeliveryIcon } from "@/app/utilities/ui/icons"
import { useCartContext } from "@/app/utilities/contexts/CartContext"
import { billingFields, shippingFields } from "@/app/utilities/library/data"
import { useCheckoutFormContext } from "@/app/utilities/contexts/CheckoutFormContext"
import { formatPrice } from "@/app/utilities/functions-and-utilities/price-utilities"
import InputField from "@/app/utilities/ui/components/custom-form-components/InputField"
import RadioGroup from "@/app/utilities/ui/components/custom-form-components/RadioGroup"
import { createHandleSubmit } from "@/app/utilities/functions-and-utilities/checkout-form-handlers"


export default function CheckoutForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { cart } = useCartContext()
    const items = cart.items;
    const total = formatPrice({ amount: cart.totalPrice })
    const shipping = formatPrice({ amount: cart.shipping })
    const totalVAT = formatPrice({ amount: cart.totalVAT })
    const grandTotal = formatPrice({ amount: cart.grandTotal })

    const cartTotals = [
        { label: "total", value: total },
        { label: "shipping", value: shipping },
        { label: "vat (included)", value: totalVAT },
    ]

    const { formData, setErrors, validateField } = useCheckoutFormContext()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const customHandler = createHandleSubmit({ formData, validateField, setErrors })
            await customHandler(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {isSubmitting && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Submitting...</span>
                </div>
            )}
            <form
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 lg:flex-row lg:items-start"
            >
                <div className="flex flex-col p-6 md:p-0 md:px-[1.69rem] md:py-[1.87rem] bg-white rounded-lg gap-8 lg:w-2/3">
                    <div className="text-3xl font-bold tracking-wide uppercase">Checkout</div>
                    <fieldset>
                        <legend className="text-xs font-bold text-darkorange uppercase mb-4">Billing Details</legend>
                        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
                            {billingFields.map(({ id, label, placeholder }) => (
                                <InputField
                                    key={id}
                                    id={id}
                                    label={label}
                                    placeholder={placeholder}
                                />
                            ))}
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend className="text-xs font-bold text-darkorange uppercase mb-4">Shipping Info</legend>
                        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
                            {shippingFields.map(({ id, label, placeholder }) => (
                                <InputField
                                    key={id}
                                    id={id}
                                    label={label}
                                    placeholder={placeholder}
                                />
                            ))}
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend className="text-xs font-bold text-darkorange uppercase mb-4">Payment Details</legend>
                        <RadioGroup />
                    </fieldset>
                    {formData.payment === "cash" && (
                        <div className="hidden md:flex flex-col gap-8 md:flex-row md:items-center">
                            <div className="flex h-9 w-9">
                                <PayOnDeliveryIcon />
                            </div>
                            <div className="opacity-50 text-black text-base font-normal leading-normal">
                                The &apos;Cash on Delivery&apos; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                            </div>
                        </div>
                    )}
                    {formData.payment === "paystack" && (
                        <div className="hidden md:flex flex-col gap-8 md:flex-row md:items-center">
                            <div className="flex h-9 w-9">
                                <PayOnDeliveryIcon />
                            </div>
                            <div className="hidden md:block opacity-50 text-black text-base font-normal leading-normal">
                                You&apos;ll be redirected to paystack to complete your purchase. Ensure you have a valid card and sufficient amount for this transaction including transaction fees to complete purchase.
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col p-6 md:p-8 bg-white rounded-lg gap-8 lg:w-1/3 lg:h-[calc(100dvh-13rem)]">
                    <div className="text-lg font-bold uppercase tracking-wider">summary</div>
                    <fieldset className={`flex flex-col gap-6 overflow-y-auto lg:flex-1`}>
                        {items.map((item) => (
                            <div
                                key={item.productId}
                                className="flex w-full gap-4 items-center"
                            >
                                <div
                                    className="h-16 w-16 p-2 border flex justify-center items-center bg-zinc-100 rounded-lg"
                                >
                                    {item.product.image && (
                                        <Image
                                            width={36}
                                            height={40}
                                            alt={`img`}
                                            src={item.product.image}
                                        />
                                    )}
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col">
                                        <div
                                            className="text-black text-base font-bold leading-normal max-w-[80px] truncate whitespace-nowrap min-[390px]:max-w-none min-[390px]:whitespace-normal"
                                        >
                                            {item.product.name}
                                        </div>
                                        <div className="opacity-50 text-black text-sm md:text-lg font-bold leading-normal">
                                            {formatPrice({ amount: item.product.price })}
                                        </div>
                                    </div>
                                    <div className="text-base font-bold opacity-50 leading-normal">
                                        x{item.quantity}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </fieldset>
                    <fieldset className="flex flex-col gap-6 lg:flex-1">
                        <div className="flex flex-col gap-2">
                            {cartTotals.map(({ label, value }) => (
                                <div key={label} className="flex justify-between uppercase">
                                    <p className="opacity-50 text-base font-normal leading-normal">{label}</p>
                                    <p className="text-lg font-bold">{value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between uppercase">
                            <p className="opacity-50 text-base font-normal leading-normal">grand total</p>
                            <p className="text-lg font-bold text-darkorange">{grandTotal}</p>
                        </div>
                    </fieldset>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-darkorange py-3 w-40 h-12 text-sm font-medium text-white uppercase"
                    >
                        {isSubmitting ? "Submitting..." : "Continue & Pay"}
                    </button>
                </div>
            </form>
        </>
    )
}