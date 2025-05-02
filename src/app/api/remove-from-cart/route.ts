import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';
import type { ServerCart } from '@/app/utilities/library/definitions';

export async function POST(request: NextRequest) {
  const { productId } = await request.json();

  const cookieStore = await cookies();
  const cartCookie = cookieStore.get('cart');

  let cart: ServerCart = { items: [] };

  if (cartCookie?.value) {
    try {
      cart = JSON.parse(cartCookie.value);
    } catch (err) {
      console.error('Failed to parse cart cookie:', err);
    }
  }

  const updatedItems = cart.items.filter(item => item.productId !== productId);

  const updatedCart: ServerCart = { items: updatedItems };

  const response = NextResponse.json(updatedCart);

  response.cookies.set('cart', JSON.stringify(updatedCart), {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
