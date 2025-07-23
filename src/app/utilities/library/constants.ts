import type { CartObject, ServerCart } from "@/app/utilities/library/definitions";

export const EMPTY_CLIENT_CART: CartObject = {
  items: [],
  totalPrice: 0,
  shipping: 0,
  totalVAT: 0,
  grandTotal: 0,
};

export const EMPTY_SERVER_CART: ServerCart = {
  items: [],
};