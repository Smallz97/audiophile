import { NextRequest } from 'next/server'
import type { ServerCartItem } from '@/app/utilities/library/definitions'
import { setCartCookie } from '@/app/utilities/functions-and-utilities/cookie-utilities';
import { parseCartCookie } from '@/app/utilities/functions-and-utilities/cookie-utilities';
import handleAPIError from '@/app/utilities/functions-and-utilities/error-utilities/HandleAPIError';


export async function POST(request: NextRequest) {
  try {
    const { productId, quantity = 1 } = await request.json();

    const parsedCart = await parseCartCookie('server');

    const existingItem = parsedCart.items.find(item => item.productId === productId)

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem: ServerCartItem = { productId, quantity }
      parsedCart.items.push(newItem)
    }

    return setCartCookie(parsedCart);

  } catch (error: unknown) {
    return handleAPIError(error);
  }
}