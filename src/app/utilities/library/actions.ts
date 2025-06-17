'use server'

import { getCartAndPriceTotals } from '@/app/utilities/library/cart-utilitues'

export async function handleCheckoutAction(formData: FormData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const address = formData.get('address')
    const zip = formData.get('zip')
    const city = formData.get('city')
    const country = formData.get('country')
    const payment = formData.get('payment')

    const cart = await getCartAndPriceTotals()

    if (cart.items.length === 0) {
        return { success: false, message: 'Your cart is empty or invalid.' }
    }

    const itemsValid = cart.items.every(item => item.quantity <= item.product.numberInStock)

    if (!itemsValid) {
        return { success: false, message: 'Some items are out of stock.' }
    }

    return {
        success: true,
        grandTotal: cart.grandTotal,
        message: 'Validation passed. Ready for payment.',
    }
}
