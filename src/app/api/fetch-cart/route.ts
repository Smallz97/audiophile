import { NextResponse } from 'next/server'
import { getCartAndPriceTotals } from '@/app/utilities/functions-and-utilities/cart-utilities'
import handleAPIError from '@/app/utilities/functions-and-utilities/error-utilities/HandleAPIError';

export async function GET() {
  try {
    const cart = await getCartAndPriceTotals();

    return NextResponse.json(cart);
    
  } catch (error: unknown) {
    return handleAPIError(error);
  }
}