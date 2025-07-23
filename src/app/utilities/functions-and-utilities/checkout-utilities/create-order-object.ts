'use server'

import { CartObject } from '@/app/utilities/library/definitions'

export async function createOrderObject(formData: FormData, cart: CartObject) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const address = formData.get('address') as string
  const zip = formData.get('zip') as string
  const city = formData.get('city') as string
  const country = formData.get('country') as string
  const payment = formData.get('payment') as string

  const order = {
    customer: { name, email, phone },
    shippingAddress: { address, zip, city, country },
    items: cart.items.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      unitPrice: item.product.price,
      total: item.product.price * item.quantity,
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

  return { order, email, amount: cart.grandTotal }
}
