import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getAllProducts } from '@/app/utilities/library/data'
import { enrichProductWithFormattedPrice, formatPrice } from '@/app/utilities/library/price-utilities'
import type { ServerCart, CartObject, CartItem } from '@/app/utilities/library/definitions'

export async function GET() {
  const allProducts = getAllProducts()
  const cookieStore = await cookies()
  const cartCookie = cookieStore.get('cart')

  const cart: CartObject = {
    items: [],
    formattedTotalPrice: ''
  }

  let totalPrice = 0
  let currency = 'USD'

  if (cartCookie?.value) {
    try {
      const parsedCart: ServerCart = JSON.parse(cartCookie.value)

      cart.items = parsedCart.items.map(item => {
        const product = allProducts.find(p => p.productId === item.productId)
        if (!product) return null

        totalPrice += product.price.amount * item.quantity
        currency = product.price.currency

        const enrichedProduct = enrichProductWithFormattedPrice(product)

        const enrichedItem: CartItem = {
          productId: item.productId,
          quantity: item.quantity,
          product: {
            name: product.name,
            price: product.price,
            image: product.cartImage,
            formattedPrice: enrichedProduct.formattedPrice,
          }
        }

        return enrichedItem
      }).filter(Boolean) as CartItem[]
    } catch (err) {
      console.error('Failed to parse or enrich cart cookie:', err)
    }
  }

  return NextResponse.json({
    ...cart,
    formattedTotalPrice: formatPrice({
      amount: totalPrice,
      currency,
    }),
  })
}