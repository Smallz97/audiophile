"use client"

import type { CartModalContextValues } from "@/app/utilities/library/definitions";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { ContextProviderProps, CartObject } from "@/app/utilities/library/definitions"

export const CartContext = createContext<CartModalContextValues | undefined>(undefined);

export function CartContextProvider({ children }: ContextProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState<CartObject>({ items: [], formattedTotalPrice: "" })

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const fetchCart = useCallback(async () => {
        try {
            const response = await fetch("/api/fetch-cart", { cache: "no-store" });
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

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    return (
        <CartContext.Provider value={{ isOpen, openModal, closeModal, fetchCart, cart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCartContext must be used within a CartContextProvider");
    return context;
};