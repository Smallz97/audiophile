import type { InputFieldProps } from "@/app/utilities/library/definitions";
import { useCheckoutFormContext } from '@/app/utilities/contexts/CheckoutFormContext'
import { createHandleBlur } from "@/app/utilities/functions-and-utilities/checkoutForm-handlers"


export default function InputField({ id, label, placeholder, type = 'text' }: InputFieldProps) {
    const { formData, setFormData, errors, setErrors, validateField } = useCheckoutFormContext()
    const handleBlur = createHandleBlur({ validateField, setErrors })

    return (
        <div className="flex flex-col gap-[0.56rem]">
            <div className="flex items-center justify-between">
                <label htmlFor={id} className="text-xs font-bold capitalise">{label}</label>
                {errors[id] && (
                    <span className="hidden lg:block text-red-600 text-xs font-normal">{errors[id]}</span>
                )}
            </div>
            <input
                id={id}
                required
                name={id}
                type={type}
                onBlur={handleBlur}
                value={formData[id]}
                placeholder={placeholder}
                onChange={(e) => setFormData((prev) => ({ ...prev, [id]: e.target.value }))}
                className="border border-stone-300 rounded-lg pl-6 py-[1.12rem] focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors[id] && (
                <span className="text-red-600 text-xs font-normal lg:hidden">{errors[id]}</span>
            )}
        </div>
    )
}