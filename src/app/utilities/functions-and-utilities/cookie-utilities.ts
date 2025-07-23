'use server'

import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import type { Cart, ServerCart, CartObject} from '@/app/utilities/library/definitions';
import { EMPTY_CLIENT_CART, EMPTY_SERVER_CART } from "@/app/utilities/library/constants";
import { CartParseError } from '@/app/utilities/functions-and-utilities/error-utilities/ErrorClasses';

export async function parseCartCookie(variant: 'server'): Promise<ServerCart>;
export async function parseCartCookie(variant: 'client'): Promise<CartObject>;
export async function parseCartCookie(variant: 'server' | 'client'): Promise<Cart> {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get('cart');

  if (!cartCookie?.value) {
    return variant === 'server' ? { ...EMPTY_SERVER_CART } : { ...EMPTY_CLIENT_CART };
  }

  try {
    return JSON.parse(cartCookie.value) as Cart;
  } catch (error) {
    throw new CartParseError(error instanceof Error ? error.message : String(error));
  }
}

export async function setCartCookie(cart: ServerCart): Promise<NextResponse<unknown>> {
  const response = NextResponse.json(cart);

  response.cookies.set('cart', JSON.stringify(cart), {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}

