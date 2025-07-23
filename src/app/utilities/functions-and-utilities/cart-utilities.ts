import { getAllProducts } from '@/app/utilities/library/data'
import { parseCartCookie } from '@/app/utilities/functions-and-utilities/cookie-utilities';
import { ProductNotFoundError } from '@/app/utilities/functions-and-utilities/error-utilities/ErrorClasses';
import type { CartItem, CartObject, ServerCartItem, Price, PriceFunctionProps } from '@/app/utilities/library/definitions'


export function getVAT({ amount }: PriceFunctionProps): Price {
  return Math.round(amount * 0.125);
}

export function getShipping({ amount }: PriceFunctionProps): Price {
  return Math.round(amount * 0.2);
}

export function getGrandTotal({ amount }: PriceFunctionProps): Price {
  return amount + getVAT({ amount }) + getShipping({ amount });
}

export async function getCartAndPriceTotals(): Promise<CartObject> {
  const allProducts = getAllProducts()

  const parsedCart = await parseCartCookie('client');

  let totalPrice = 0;

  const items: CartItem[] = parsedCart.items.map((serverItem: ServerCartItem) => {
    const product = allProducts.find(product => product.productId === serverItem.productId);
    if (!product) {
      throw new ProductNotFoundError(serverItem.productId);
    }

    totalPrice += product.price * serverItem.quantity;

    return {
      productId: serverItem.productId,
      quantity: serverItem.quantity,
      product: {
        name: product.name,
        price: product.price,
        image: product.cartImage,
        numberInStock: product.numberInStock,
      },
    };
  });

  const totalVAT = getVAT({ amount: totalPrice });
  const shipping = getShipping({ amount: totalPrice });
  const grandTotal = getGrandTotal({ amount: totalPrice });

  return {
    items,
    totalPrice,
    totalVAT,
    shipping,
    grandTotal
  }
}
