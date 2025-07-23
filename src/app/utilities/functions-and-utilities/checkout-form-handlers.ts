'use client'

import { CheckoutFormContextValues } from '@/app/utilities/library/definitions'
import { handleCheckoutAction } from '@/app/utilities/actions/handleCheckoutAction'

export function createHandleBlur({
  validateField,
  setErrors
}: Pick<CheckoutFormContextValues, 'validateField' | 'setErrors'>) {
  return (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }
}

export function createHandleSubmit({
  formData,
  validateField,
  setErrors,
}: Pick<
  CheckoutFormContextValues,
  'formData' | 'validateField' | 'setErrors'
>) {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const data = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value)
      })

      const result = await handleCheckoutAction(data)

      if (result?.success) {
        if (result.paymentType === 'paystack' && result.authorizationUrl) {
          window.location.href = result.authorizationUrl
        } else if (result.paymentType === 'cash-on-delivery') {
          alert(result.message || 'Order placed successfully. Pay on delivery.')
          window.location.href = '/'
        } else {
          alert(result.message || 'Something went wrong. Invalid payment type.')
          window.location.href = '/'
        }
      } else {
        alert(result?.message || 'Payment failed. Please try again.')
        window.location.href = '/'
      }
    }
  }
}
