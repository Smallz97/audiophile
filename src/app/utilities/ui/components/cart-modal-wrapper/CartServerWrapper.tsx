import { cookies } from 'next/headers'
import { getAllProducts } from '@/app/utilities/library/data'
import CartModal from '@/app/utilities/ui/components/cart-modal/CartModal'
import type { ServerCart, ServerCartItem, ModalCartItem, ModalCart } from '@/app/utilities/library/definitions'

export default async function CartServerWrapper() {
    const cookieStore = await cookies()
    const cartCookie = cookieStore.get('cart')
    console.log("Cart Cookie:", cartCookie?.value);
    const allProducts = getAllProducts()

    const modalCart: ModalCart = { items: [] }

    if (cartCookie?.value) {
        console.log('[cartCookie.value]', cartCookie?.value)
        try {
            const parsedCart: ServerCart = JSON.parse(cartCookie.value)
            console.log("Parsed Cart:", parsedCart);

            modalCart.items = parsedCart.items.map((item: ServerCartItem) => {
                const product = allProducts.find(p => p.productId === item.productId)

                if (!product) return null

                const enrichedItem: ModalCartItem = {
                    productId: item.productId,
                    quantity: item.quantity,
                    product: {
                        name: product.name,
                        price: product.price,
                        image: product.suggestedProductCardImages,
                    },
                }
                return enrichedItem
            }).filter(Boolean) as ModalCartItem[]
        } catch (err) {
            console.error('Failed to parse or enrich cart cookie:', err)
        }
    }

    return (
        <CartModal cart={modalCart} />
    );
}