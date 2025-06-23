'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/app/utilities/contexts/CartContext";

export default function ClientCartRedirect() {
    const router = useRouter();
    const { cart } = useCartContext();

    useEffect(() => {
        if (cart.items.length === 0) {
            router.push("/");
        }
    }, [cart.items.length]);

    return null;
}
