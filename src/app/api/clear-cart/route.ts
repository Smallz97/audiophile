import type { ServerCart } from '@/app/utilities/library/definitions'
import { setCartCookie } from '@/app/utilities/functions-and-utilities/cookie-utilities';
import handleAPIError from '@/app/utilities/functions-and-utilities/error-utilities/HandleAPIError';


export async function POST() {
  try {
    const emptyCart: ServerCart = { items: [] }

    return setCartCookie(emptyCart);
    
  } catch (error: unknown) {
    return handleAPIError(error);
  }
}
