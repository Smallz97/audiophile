import CartButton from "@/app/utilities/ui/components/buttons/CartButton"
import { getCartWithProducts } from "@/app/utilities/library/cart-functions"

export default async function CartWrapper() {
    const cartData = await getCartWithProducts()

    return <CartButton initialCartData={cartData} />
}