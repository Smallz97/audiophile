'use server'

import { revalidatePath } from 'next/cache';

import { 
  addToCart, 
  removeFromCart, 
  updateCartItemQuantity, 
  clearCart,
  validateCart,
  getCart
} from "@/app/utilities/library/cart-functions";

export async function addItemToCart(productId: string, quantity: number) {
  await addToCart(productId, quantity);
  revalidatePath('/');
  return { success: true };
}

export async function removeItemFromCart(productId: string) {
  await removeFromCart(productId);
  revalidatePath('/');
  return { success: true };
}

export async function updateItemQuantity(productId: string, quantity: number) {
  await updateCartItemQuantity(productId, quantity);
  revalidatePath('/');
  return { success: true };
}

export async function emptyCart() {
  await clearCart();
  revalidatePath('/');
  return { success: true };
}

export async function initiateCheckout() {
  const cart = await getCart();
  const validationResult = validateCart(cart);
  
  if (!validationResult.isValid) {
    return { 
      success: false, 
      error: 'Some items in your cart are no longer available.' 
    };
  }
  
  if (validationResult.validatedItems.length === 0) {
    return { 
      success: false, 
      error: 'Your cart is empty.' 
    };
  }
  
  return {
    success: true,
    checkoutData: validationResult,
  };
}