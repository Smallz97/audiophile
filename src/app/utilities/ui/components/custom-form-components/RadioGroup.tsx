import { paymentOptions } from "@/app/utilities/library/data"
import { useCheckoutFormContext } from '@/app/utilities/contexts/CheckoutFormContext'

export default function RadioGroup() {
    const { formData, setFormData, errors, setErrors, validateField } = useCheckoutFormContext()

    function handleRadioChange(value: string) {
        setFormData((prev) => ({ ...prev, payment: value }))
        const error = validateField('payment', value)
        setErrors((prev) => ({ ...prev, payment: error }))
    }

    return (
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4">
            <div className="text-xs font-bold capitalise">Payment Method</div>
            <div className="flex flex-col gap-4">
                {paymentOptions.map(({ id, label, value }) => (
                    <div
                        key={id}
                        className="flex gap-4 border border-gray-300 rounded-lg pl-6 py-[1.12rem] cursor-pointer"
                    >
                        <input
                            id={id}
                            required
                            type="radio"
                            value={value}
                            name="payment"
                            className="accent-darkorange"
                            checked={formData.payment === value}
                            aria-checked={formData.payment === value}
                            onChange={() => handleRadioChange(value)}
                        />
                        <label htmlFor={id} className="text-sm font-bold">{label}</label>
                    </div>
                ))}
            </div>
            {errors.payment && (
                <span className="text-red-600 text-xs font-normal">{errors.payment}</span>
            )}
        </div>
    )
}