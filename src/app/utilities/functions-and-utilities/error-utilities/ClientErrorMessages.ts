export default function getClientErrorMessage(serverErrorMessage: string): string {
  if (serverErrorMessage.includes('parse cart')) {
    return 'We had trouble loading your cart. Please try again later.';
  }
  if (serverErrorMessage.includes('Product with ID')) {
    return 'One or more products in your cart are no longer available.';
  }
  if (serverErrorMessage.includes('Unauthorized')) {
    return 'Please log in to access your cart.';
  }

  return 'Something went wrong. Please try again.';
}