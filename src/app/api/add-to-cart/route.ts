import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import type { ServerCart, ServerCartItem } from '@/app/utilities/library/definitions'

export async function POST(request: NextRequest) {
  const { productId, quantity = 1 } = await request.json();

  const cookieStore = await cookies()
  const cartCookie = cookieStore.get('cart')

  let cart: ServerCart = { items: [] }

  if (cartCookie?.value) {
    try {
      cart = JSON.parse(cartCookie.value)
    } catch (err) {
      console.error('Failed to parse cart cookie:', err)
      cart = { items: [] }
    }
  }

  const existingItem = cart.items.find(item => item.productId === productId)

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    const newItem: ServerCartItem = { productId, quantity }
    cart.items.push(newItem)
  }

  const response = NextResponse.json(cart)

  response.cookies.set('cart', JSON.stringify(cart), {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}