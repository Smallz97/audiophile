'use server'

import { validateCart } from "@/app/utilities/functions-and-utilities/checkout-utilities/validate-cart"
import { createOrderObject } from "@/app/utilities/functions-and-utilities/checkout-utilities/create-order-object"
import { initializePaystackTransaction } from "@/app/utilities/functions-and-utilities/checkout-utilities/initialize-paystack"

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
                paymentType: 'paystack',
                reference: paystack.reference,
                authorizationUrl: paystack.authorizationUrl,
            }
        } catch (error) {
            console.error('Paystack initialization error:', error);
            return {
                success: false,
                message: 'Payment initialization failed. Please try again.',
            }
        }
    } else if (order.paymentMethod === 'cash') {
        return {
            success: true,
            paymentType: 'cash-on-delivery',
            message: 'Order placed successfully. Please pay on delivery.',
        }
    } else {
        return {
            success: false,
            message: 'Invalid payment method.',
        }
    }
}
