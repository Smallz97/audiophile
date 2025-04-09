import { Price } from "@/app/utilities/library/definitions";

export function formatPrice(price: Price, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 2
  }).format(price.amount / 100);
}

export function createPrice(amount: number, currency = 'USD'): Price {
  return {
    amount,
    currency
  };
}