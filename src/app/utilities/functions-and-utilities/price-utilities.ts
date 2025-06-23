import type { Price, PriceFunctionProps } from "@/app/utilities/library/definitions";

export function createPrice(amount: Price): Price {
  return amount;
}

export function formatPrice({  amount, currency, userLocale }: PriceFunctionProps): string {
  const detectedCurrency = currency || 'USD';
  const detectedLocale = userLocale || (typeof navigator !== 'undefined' ? navigator.language : 'en-US');

  return new Intl.NumberFormat(detectedLocale, {
    style: 'currency',
    currency: detectedCurrency,
    minimumFractionDigits: 2,
  }).format(amount / 100);
}

