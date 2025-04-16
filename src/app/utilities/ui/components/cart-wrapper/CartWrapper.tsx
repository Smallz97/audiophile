import CartButton from "@/app/utilities/ui/components/buttons/CartButton"

export default function CartWrapper() {
    return <CartButton initialCartData={{ items: [], totalItems: 0 }} />
}