import type { Price, Product, EnrichedProduct } from "@/app/utilities/library/definitions";

export function createPrice(amount: number, currency = 'USD'): Price {
  return {
    amount,
    currency
  };
}

export function formatPrice(price: Price, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 2
  }).format(price.amount / 100);
}

export function enrichProductWithFormattedPrice(
  product: Product,
  locale = 'en-US'
): EnrichedProduct {
  return {
    ...product,
    formattedPrice: formatPrice(product.price, locale),
  };
}