'use client'

import { createContext, useContext, useState } from 'react'
import type { CheckoutFormContextValues, ContextProviderProps, FormData } from '@/app/utilities/library/definitions'

const CheckoutFormContext = createContext<CheckoutFormContextValues | undefined>(undefined)

export function CheckoutFormContextProvider({ children }: ContextProviderProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        payment: '',
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'name':
            case 'address':
            case 'city':
            case 'country':
                if (!value.trim()) return `* ${name[0].toUpperCase() + name.slice(1)} is required`
                break
            case 'email':
                if (!value.trim()) return '* Email is required'
                if (!/\S+@\S+\.\S+/.test(value)) return '* Enter a valid email'
                break
            case 'zip':
                if (!value.trim()) return '* ZIP Code is required'
                if (!/^[0-9]{5}(-[0-9]{4})?$/.test(value.trim())) return '* ZIP code must be 5 or 9 digits'
                break
            case 'phone':
                if (!value.trim()) return '* Phone number is required'
                if (!/^[\d\-+\s()]{7,}$/.test(value.trim()))
                    return 'Enter a valid phone number'
                break
            case 'payment':
                if (!value.trim()) return '* Select a payment method'
                break
        }
        return ''
    }

    return (
        <CheckoutFormContext.Provider
            value={{
                formData,
                setFormData,
                errors,
                setErrors,
                validateField,
            }}
        >
            {children}
        </CheckoutFormContext.Provider>
    )
}

export function useCheckoutFormContext() {
    const context = useContext(CheckoutFormContext)
    if (!context) throw new Error('useCheckoutFormContext must be used within a CheckoutFormContextProvider')
    return context
}
