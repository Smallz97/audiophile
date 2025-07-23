import { NextRequest } from 'next/server';
import type { ServerCart, ServerCartItem } from '@/app/utilities/library/definitions';
import { setCartCookie } from '@/app/utilities/functions-and-utilities/cookie-utilities';
import { parseCartCookie } from '@/app/utilities/functions-and-utilities/cookie-utilities';
import handleAPIError from '@/app/utilities/functions-and-utilities/error-utilities/HandleAPIError';

export async function PATCH(request: NextRequest) {
  try {
    const { productId, change } = await request.json();

    const parsedCart = await parseCartCookie('server');

    const updatedItems: ServerCartItem[] = parsedCart.items
      .map(item => {
        if (item.productId === productId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })
      .filter(Boolean) as ServerCartItem[];
    const updatedCart: ServerCart = { items: updatedItems };

    return setCartCookie(updatedCart);

  } catch (error: unknown) {
    return handleAPIError(error);
  }
}