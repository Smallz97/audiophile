import { NextResponse } from 'next/server'
import type { ServerCart } from '@/app/utilities/library/definitions'

export async function POST() {
  const emptyCart: ServerCart = { items: [] }

  const response = NextResponse.json(emptyCart)

  response.cookies.set('cart', JSON.stringify(emptyCart), {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}
