import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import type { ServerCart, ServerCartItem } from '@/app/utilities/library/definitions'

export async function PATCH(request: NextRequest) {
  const { productId, change } = await request.json()

  const cookieStore = await cookies()
  const cartCookie = cookieStore.get('cart')

  let updatedCart: ServerCart = { items: [] }

  if (cartCookie?.value) {
    try {
      const parsedCart: ServerCart = JSON.parse(cartCookie.value)

      updatedCart.items = parsedCart.items
        .map(item => {
          if (item.productId === productId) {
            const newQuantity = item.quantity + change
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
          }
          return item
        })
        .filter(Boolean) as ServerCartItem[]

    } catch (err) {
      console.error('Failed to parse cart cookie:', err)
    }
  }

  const response = NextResponse.json(updatedCart)

  response.cookies.set('cart', JSON.stringify(updatedCart), {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}