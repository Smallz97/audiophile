import { NextResponse } from 'next/server'
import { getCartAndPriceTotals } from '@/app/utilities/functions-and-utilities/cart-functions'

export async function GET() {
  const cart = await getCartAndPriceTotals()

  return NextResponse.json(cart)
}