"use client"

import type { ModalCart } from "@/app/utilities/library/definitions"
import type { CartModalContextType } from "@/app/utilities/library/definitions";
import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";

const CartModalContext = createContext<CartModalContextType | undefined>(undefined);

export function CartModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState<ModalCart>({ items: [], formattedTotalPrice: "" })

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const fetchCart = useCallback(async () => {
        try {
            const response = await fetch("/api/cart", { cache: "no-store" });
            const data = await response.json();
            setCart(data);
        } catch (err) {
            console.error("Error fetching cart:", err);
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <CartModalContext.Provider value={{ isOpen, openModal, closeModal, fetchCart, cart }}>
            {children}
        </CartModalContext.Provider>
    );
}

export const useCartModal = () => {
    const context = useContext(CartModalContext);
    if (!context) throw new Error("useCartModal must be used within a CartModalProvider");
    return context;
};