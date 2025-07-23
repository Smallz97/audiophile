'use server'

import type { ValidateCartResult } from '@/app/utilities/library/definitions'
import { getCartAndPriceTotals } from '@/app/utilities/functions-and-utilities/cart-utilities'

export async function validateCart(): Promise<ValidateCartResult> {
  const cart = await getCartAndPriceTotals()

  if (cart.items.length === 0) {
    return { valid: false, message: 'Your cart is empty.' }
  }

  const itemsValid = cart.items.every(item => item.quantity <= item.product.numberInStock)

  if (!itemsValid) {
    return { valid: false, message: 'Some items are out of stock.' }
  }

  return { valid: true, cart }
}
