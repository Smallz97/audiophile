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

    if (!name || !email || !phone || !address || !zip || !city || !country || !payment) {
        return { success: false, message: 'All fields are required.' }
    }

    const cart = await getCartAndPriceTotals()

    if (cart.items.length === 0) {
        return { success: false, message: 'Your cart is empty or invalid.' }
    }

    const itemsValid = cart.items.every(item => item.quantity <= item.product.numberInStock)

    if (!itemsValid) {
        return { success: false, message: 'Some items are out of stock.' }
    }

    const order = {
        customer: {
            name,
            email,
            phone,
        },
        shippingAddress: {
            address,
            zip,
            city,
            country,
        },
        items: cart.items.map(CartItem => ({
            productId: CartItem.productId,
            quantity: CartItem.quantity,
            unitPrice: CartItem.product.price,
            total: CartItem.product.price * CartItem.quantity,
        })),
        totals: {
            vat: cart.totalVAT,
            shipping: cart.shipping,
            subtotal: cart.totalPrice,
            grandTotal: cart.grandTotal,
        },
        status: 'pending',
        paymentMethod: payment,
        createdAt: new Date().toISOString(),
    }

    return {
        order,
        success: true,
        total: order.totals.grandTotal,
        message: 'Validation passed. Ready for payment.',
    }
}
