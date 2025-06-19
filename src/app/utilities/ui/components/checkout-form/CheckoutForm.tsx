'use client'

import Image from "next/image"
import { useState } from "react"
import { PayOnDeliveryIcon } from "@/app/utilities/ui/icons"
import { paymentOptions } from "@/app/utilities/library/data"
import { useCartContext } from "@/app/utilities/contexts/CartContext"
import { formatPrice } from "@/app/utilities/library/price-utilities"
import type { InputFieldProps, RadioGroupProps, CheckoutFormProps } from "@/app/utilities/library/definitions"

function InputField({ id, label, placeholder, type = 'text' }: InputFieldProps) {
    return (
        <div className="flex flex-col gap-[0.56rem]">
            <label htmlFor={id} className="text-xs font-bold capitalise">{label}</label>
            <input
                id={id}
                required
                name={id}
                type={type}
                placeholder={placeholder}
                className="border border-stone-300 rounded-lg pl-6 py-[1.12rem] focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>
    )
}

function RadioGroup({ name, options, onChange }: RadioGroupProps) {
    return (
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4">
            <label className="text-xs font-bold capitalise">Payment Method</label>
            <div className="flex flex-col gap-4">
                {options.map(({ id, label, value }) => (
                    <div
                        key={id}
                        className="flex gap-4 border border-gray-300 rounded-lg pl-6 py-[1.12rem] cursor-pointer"
                    >
                        <input
                            id={id}
                            required
                            name={name}
                            type="radio"
                            value={value}
                            className="accent-darkorange"
                            onChange={() => onChange?.(value)}
                        />
                        <label htmlFor={id} className="text-sm font-bold">{label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function CheckoutForm({ action }: CheckoutFormProps) {
    const { cart } = useCartContext()
    const items = cart.items;
    const total = formatPrice({ amount: cart.totalPrice })
    const shipping = formatPrice({ amount: cart.shipping })
    const totalVAT = formatPrice({ amount: cart.totalVAT })
    const grandTotal = formatPrice({ amount: cart.grandTotal })

    const totals = [
        { label: "total", value: total },
        { label: "shipping", value: shipping },
        { label: "vat (included)", value: totalVAT },
    ]

    const [selectedPayment, setSelectedPayment] = useState("")

    return (
        <form
            action={action}
            className="flex flex-col gap-8 lg:flex-row lg:items-start"
        >
            <div className="flex flex-col p-6 md:p-0 md:px-[1.69rem] md:py-[1.87rem] bg-white rounded-lg gap-8 lg:w-2/3">
                <div className="text-3xl font-bold tracking-wide uppercase">Checkout</div>
                <fieldset>
                    <legend className="text-xs font-bold text-darkorange uppercase mb-4">Billing Details</legend>
                    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
                        <InputField id="name" label="Name" placeholder="Alexei Ward" />
                        <InputField id="email" label="Email" type="email" placeholder="alexei@mail.com" />
                        <InputField id="phone" label="Phone Number" type="tel" placeholder="+1 202-555-0136" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-xs font-bold text-darkorange uppercase mb-4">Shipping Info</legend>
                    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
                        <InputField id="address" label="Address" placeholder="1137 Williams Avenue" />
                        <InputField id="zip" label="ZIP Code" placeholder="10001" />
                        <InputField id="city" label="City" placeholder="New York" />
                        <InputField id="country" label="Country" placeholder="United States" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-xs font-bold text-darkorange uppercase mb-4">Payment Details</legend>
                    <RadioGroup
                        name="payment"
                        options={paymentOptions}
                        onChange={(value) => setSelectedPayment(value)}
                    />
                </fieldset>
                {selectedPayment === "cash" && (
                    <div className="hidden lg:flex flex-col gap-8 lg:flex-row lg:items-center">
                        <div className="flex h-9 w-9">
                            <PayOnDeliveryIcon />
                        </div>
                        <div className="opacity-50 text-black text-base font-normal leading-normal">
                            The &apos;Cash on Delivery&apos; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col p-6 md:p-8 bg-white rounded-lg gap-8 lg:w-1/3">
                <div className="text-lg font-bold uppercase tracking-wider">summary</div>
                <fieldset className={`flex flex-col gap-6`}>
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
                                        title={item.product.name}
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
                <fieldset className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        {totals.map(({ label, value }) => (
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
                    className="w-full bg-darkorange py-3 w-40 h-12 text-sm font-medium text-white uppercase"
                >
                    continue & pay
                </button>
            </div>
        </form>
    )
}