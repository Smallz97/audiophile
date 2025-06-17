"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { CartContextValues, ContextProviderProps, CartObject } from "@/app/utilities/library/definitions"

export const CartContext = createContext<CartContextValues | undefined>(undefined);

export function CartContextProvider({ children }: ContextProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cart, setCart] = useState<CartObject>({
        items: [],
        totalPrice: 0,
        shipping: 0,
        totalVAT: 0,
        grandTotal: 0,
    })

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    return (
        <CartContext.Provider value={{ isModalOpen, openModal, closeModal, fetchCart, cart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCartContext must be used within a CartContextProvider");
    return context;
};