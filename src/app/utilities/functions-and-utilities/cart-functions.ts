import { cookies } from "next/headers";
import { getAllProducts } from '@/app/utilities/library/data'
import type { CartItem, CartObject, ServerCartItem, ServerCart, Price, PriceFunctionProps } from '@/app/utilities/library/definitions'

export function getVAT({ amount }: PriceFunctionProps): Price {
  return Math.round(amount * 0.125);
}

export function getShipping({ amount }: PriceFunctionProps): Price {
  return Math.round(amount * 0.2);
}

export function getGrandTotal({ amount }: PriceFunctionProps): Price {
  return amount + getVAT({ amount }) + getShipping({ amount });
}

export async function getCartAndPriceTotals(){
  const allProducts = getAllProducts()
  const cookieStore = await cookies()
  const cartCookie = cookieStore.get('cart')
  
  const cart: CartObject = {
    items: [],
    totalPrice: 0,
    shipping: 0,
    totalVAT: 0,
    grandTotal: 0,
  }

  let totalPrice = 0
  let shipping = 0
  let totalVAT = 0
  let grandTotal = 0

  if (cartCookie?.value) try {
    const parsedCart: ServerCart = JSON.parse(cartCookie.value)

    cart.items = parsedCart.items.map((ServerCartItem: ServerCartItem) => {
      const product = allProducts.find(product => product.productId === ServerCartItem.productId)
      if (!product) return null

      totalPrice += product.price * ServerCartItem.quantity
      totalVAT = getVAT({ amount: totalPrice })
      shipping = getShipping({ amount: totalPrice })
      grandTotal = getGrandTotal({ amount: totalPrice })

      const cartItem: CartItem = {
        productId: ServerCartItem.productId,
        quantity: ServerCartItem.quantity,
        product: {
          name: product.name,
          price: product.price,
          image: product.cartImage,
          numberInStock: product.numberInStock,
        }
      }
      return cartItem
    }).filter(Boolean) as CartItem[]
  } catch (err) {
    console.error('Failed to calculate cart:', err)
  }

  return {
    ...cart,
    totalPrice,
    totalVAT,
    shipping,
    grandTotal
  }
}
