import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getAllProducts } from '@/app/utilities/library/data'
import { formatPrice } from '@/app/utilities/library/price-utilities'
import type { ServerCart, ModalCart, ModalCartItem } from '@/app/utilities/library/definitions'

export async function GET() {
  const allProducts = getAllProducts()
  const cookieStore = await cookies()
  const cartCookie = cookieStore.get('cart')

  const modalCart: ModalCart = {
    items: [],
    formattedTotalPrice: ''
  }

  let totalPrice = 0
  let currency = 'USD'

  if (cartCookie?.value) {
    try {
      const parsedCart: ServerCart = JSON.parse(cartCookie.value)

      modalCart.items = parsedCart.items.map(item => {
        const product = allProducts.find(p => p.productId === item.productId)
        if (!product) return null

        totalPrice += product.price.amount * item.quantity
        currency = product.price.currency

        const enrichedItem: ModalCartItem = {
          productId: item.productId,
          quantity: item.quantity,
          product: {
            name: product.name,
            price: product.price,
            image: product.cartImage,
          }
        }

        return enrichedItem
      }).filter(Boolean) as ModalCartItem[]
    } catch (err) {
      console.error('Failed to parse or enrich cart cookie:', err)
    }
  }

  return NextResponse.json({
    ...modalCart,
    formattedTotalPrice: formatPrice({
      amount: totalPrice,
      currency,
    }),
  })
}