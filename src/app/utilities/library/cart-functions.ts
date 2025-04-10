import { cookies } from "next/headers";
import { getAllProducts } from "@/app/utilities/library/data";
import { CartItem, Cart, CartWithProducts } from "@/app/utilities/library/definitions"

const CART_COOKIE_NAME = 'audiophile_cart';

export async function saveCart(cart: Cart): Promise<void> {
  const cookieStore = await cookies();
  
  cookieStore.set(CART_COOKIE_NAME, JSON.stringify(cart), {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
      //   secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
}

export async function clearCart(): Promise<Cart> {
  const emptyCart = { items: [] };
  saveCart(emptyCart);

  return emptyCart;
}

export async function getCart(): Promise<Cart> {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get(CART_COOKIE_NAME);
  
  if (!cartCookie?.value) {
    return { items: [] };
  }
  
  try {
    return JSON.parse(cartCookie.value) as Cart;
  } catch (error) {
    console.log(error)
    return { items: [] };
  }
}

export async function addToCart(itemToAdd: CartItem): Promise<Cart> {
  const cart = await getCart();
  const existingItemIndex = cart.items.findIndex((cartItem) => cartItem.productId === itemToAdd.productId);
  
  if (existingItemIndex >= 0) {
    cart.items[existingItemIndex].quantity += itemToAdd.quantity;
  } else {
    cart.items.push(itemToAdd);
  }

  saveCart(cart);
  return cart;
}

export async function removeFromCart(productId: string): Promise<Cart> {
  const cart = await getCart();
  const updatedItems = cart.items.filter((item: { productId: string; }) => item.productId !== productId);
  
  const updatedCart = { items: updatedItems };
  saveCart(updatedCart);

  return updatedCart;
}

export async function updateCartItemQuantity(productId: string, quantity: number): Promise<Cart> {
  const cart = await getCart();
  const existingItemIndex = cart.items.findIndex(item => item.productId === productId);
  
  if (existingItemIndex >= 0) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }

    cart.items[existingItemIndex].quantity = quantity;
    saveCart(cart);
  }
  
  return cart;
}


export async function getCartWithProducts(): Promise<CartWithProducts> {
  const cart = await getCart()
  const allProducts = getAllProducts()

  const itemsWithDetails = cart.items
    .map((item) => {
      const product = allProducts.find((p) => p.name === item.productId);

      if (!product) return null;

      return {
        productId: item.productId,
        quantity: item.quantity,
        product: {
          ...product,
          price: product.price.amount,
        },
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return {
    items: itemsWithDetails,
    totalItems: itemsWithDetails.reduce((sum, item) => sum + item.quantity, 0),
  }
}


export function validateCart(cart: Cart) {
  const allProducts = getAllProducts();
  let subtotal = 0;
  let isValid = true;
  const validatedItems = [];
  
  for (const item of cart.items) {
    const product = allProducts.find(p => p.name === item.productId);
    
    if (!product) {
      isValid = false;
      continue;
    }
    

    const itemPrice = product.price?.amount || 0;
    const itemTotal = itemPrice * item.quantity;
    
    subtotal += itemTotal;
    validatedItems.push({
      productId: item.productId,
      quantity: item.quantity,
      price: product.price,
      priceAmount: itemPrice,
      total: itemTotal,
      product,
    });
  }
  
  return {
    isValid,
    validatedItems,
    subtotal,
    total: subtotal,
    totalPrice: {
      amount: subtotal,
      currency: validatedItems.length > 0 ? validatedItems[0].price.currency : 'USD'
    }
  };
}