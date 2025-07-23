"use client"

import { EMPTY_CLIENT_CART } from "@/app/utilities/library/constants";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { CartContextValues, ContextProviderProps, CartObject } from "@/app/utilities/library/definitions"
import getClientErrorMessage from "@/app/utilities/functions-and-utilities/error-utilities/ClientErrorMessages";

export const CartContext = createContext<CartContextValues | undefined>(undefined);

export function CartContextProvider({ children }: ContextProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cart, setCart] = useState<CartObject>(EMPTY_CLIENT_CART);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const fetchCart = useCallback(async () => {
        const response = await fetch("/api/fetch-cart", { cache: "no-store" });

        if (!response.ok) {
            const errorData = await response.json();
            const clientErrorMessage = getClientErrorMessage(errorData.error || '');
            throw new Error(clientErrorMessage);
        }

        const data: CartObject = await response.json();
        setCart(data);
    }, [])

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