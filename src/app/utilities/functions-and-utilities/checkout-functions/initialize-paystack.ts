'use server'

export async function initializePaystackTransaction(email: string, amount: number) {
  const callbackUrl = process.env.NEXT_PUBLIC_PAYSTACK_CALLBACK_URL

  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      amount: amount,
      callback_url: callbackUrl,
    }),
  })

  const data = await response.json()
  console.log(data)

  if (!response.ok || !data.status) {
    throw new Error('Failed to initialize Paystack transaction')
  }

  return {
    authorizationUrl: data.data.authorization_url,
    reference: data.data.reference,
  }
}
