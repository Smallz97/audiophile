import { NextResponse } from 'next/server'
import { getCartAndPriceTotals } from '@/app/utilities/library/cart-utilitues'

export async function GET() {
  const cart = await getCartAndPriceTotals()

  return NextResponse.json(cart)
}