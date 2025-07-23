import { NextRequest } from 'next/server';
import type { ServerCart } from '@/app/utilities/library/definitions';
import { setCartCookie } from '@/app/utilities/functions-and-utilities/cookie-utilities';
import { parseCartCookie } from '@/app/utilities/functions-and-utilities/cookie-utilities';
import handleAPIError from '@/app/utilities/functions-and-utilities/error-utilities/HandleAPIError';

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();

    const parsedCart = await parseCartCookie('server');

    const updatedItems = parsedCart.items.filter(item => item.productId !== productId);

    const updatedCart: ServerCart = { items: updatedItems };

    return setCartCookie(updatedCart);
  } catch (error: unknown) {
    return handleAPIError(error);
  }
}