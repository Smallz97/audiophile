'use client'

import Image from "next/image"
import { useCartContext } from "@/app/utilities/contexts/CartContext"
import LinkButton from "@/app/utilities/ui/components/buttons/link-buttons/LinkButton"
import type { InputFieldProps, RadioGroupProps } from "@/app/utilities/library/definitions"

function InputField({ id, label, placeholder, type = 'text' }: InputFieldProps) {
    return (
        <div className="flex flex-col space-y-[0.56rem]">
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

function RadioGroup({ name, options }: RadioGroupProps) {
    return (
        <div className="space-y-6">
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
                    />
                    <label htmlFor={id} className="text-sm font-bold">{label}</label>
                </div>
            ))}
        </div>
    )
}

export default function CheckoutForm() {
    const { cart } = useCartContext()
    const items = cart.items;
    const total = cart.formattedTotalPrice

    return (
        <form className="space-y-8">
            <div className="p-6 bg-white rounded-lg space-y-8">
                <div className="text-3xl font-bold tracking-wide uppercase">Checkout</div>
                <fieldset className="space-y-4">
                    <legend className="text-xs font-bold text-darkorange uppercase">Billing Details</legend>
                    <div className="space-y-6">
                        <InputField id="name" label="Name" placeholder="Alexei Ward" />
                        <InputField id="email" label="Email" type="email" placeholder="alexei@mail.com" />
                        <InputField id="phone" label="Phone Number" type="tel" placeholder="+1 202-555-0136" />
                    </div>
                </fieldset>
                <fieldset className="space-y-4">
                    <legend className="text-xs font-bold text-darkorange uppercase">Shipping Info</legend>
                    <div className="space-y-6">
                        <InputField id="address" label="Address" placeholder="1137 Williams Avenue" />
                        <InputField id="zip" label="ZIP Code" placeholder="10001" />
                        <InputField id="city" label="City" placeholder="New York" />
                        <InputField id="country" label="Country" placeholder="United States" />
                    </div>
                </fieldset>
                <fieldset className="space-y-4">
                    <legend className="text-xs font-bold text-darkorange uppercase">Payment Details</legend>
                    <RadioGroup
                        name="payment"
                        options={[
                            { id: 'cod', label: 'Cash on Delivery', value: 'cash' },
                            { id: 'paystack', label: 'Pay with Paystack', value: 'paystack' },
                        ]}
                    />
                </fieldset>
            </div>

            <div className="p-6 bg-white rounded-lg space-y-8">
                <div className="text-lg font-bold uppercase tracking-wider">summary</div>
                <fieldset className={`flex flex-col gap-6`}>
                    {items.map((item) => (
                        <div
                            key={item.productId}
                            className="flex w-full gap-4 items-center"
                        >
                            <div className="h-16 w-16 p-2 border flex justify-center items-center bg-zinc-100 rounded-lg">
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
                                        {item.product.formattedPrice}
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
                        <div className="flex justify-between uppercase">
                            <p className="opacity-50 text-base font-normal leading-normal">total</p>
                            <p className="text-lg font-bold">{total}</p>
                        </div>
                        <div className="flex justify-between uppercase">
                            <p className="opacity-50 text-base font-normal leading-normal">shipping</p>
                            <p className="text-lg font-bold">$50</p>
                        </div>
                        <div className="flex justify-between uppercase">
                            <p className="opacity-50 text-base font-normal leading-normal">vat (included)</p>
                            <p className="text-lg font-bold">$1,079</p>
                        </div>
                    </div>
                    <div className="flex justify-between uppercase">
                        <p className="opacity-50 text-base font-normal leading-normal">grand total</p>
                        <p className="text-lg font-bold text-darkorange">$5,446</p>
                    </div>
                </fieldset>
                <LinkButton
                    href={`/`}
                    className="w-full bg-darkorange py-3 text-sm font-medium text-white uppercase"
                >
                    continue & pay
                </LinkButton>
            </div>
        </form>
    )
}