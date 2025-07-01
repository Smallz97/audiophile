'use server'

import { validateCart } from "@/app/utilities/functions-and-utilities/checkout-functions/validate-cart"
import { createOrderObject } from "@/app/utilities/functions-and-utilities/checkout-functions/create-order-object"
import { initializePaystackTransaction } from "@/app/utilities/functions-and-utilities/checkout-functions/initialize-paystack"

export async function handleCheckoutAction(formData: FormData) {
    const result = await validateCart()

    if (!result.valid) { 
        return 
    }

    const { order, email, amount } = await createOrderObject(formData, result.cart)
    
    if (order.paymentMethod === 'paystack') {
        try {
            const paystack = await initializePaystackTransaction(email, amount)
            return {
                success: true,
                paymentType: 'online',
                authorizationUrl: paystack.authorizationUrl,
                reference: paystack.reference,
            }
        } catch (error) {
            console.error('Paystack error:', error)
            return {
                success: false,
                message: 'Payment initialization failed. Please try again.',
            }
        }
    } else if (order.paymentMethod === 'cash') {
        return {
            success: true,
            paymentType: 'offline',
            message: 'Order placed successfully. Please pay on delivery.',
        }
    } else {
        return {
            success: false,
            message: 'Invalid payment method.',
        }
    }
}
