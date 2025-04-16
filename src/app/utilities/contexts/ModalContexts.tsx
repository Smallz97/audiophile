'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

import { CartModalContextType } from "../library/definitions";

const CartModalContext = createContext<CartModalContextType | undefined>(undefined);

export const useCartModal = () => {
    const context = useContext(CartModalContext);
    if (!context) throw new Error("useCartModal must be used within a CartModalProvider");
    return context;
};

export function CartModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <CartModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </CartModalContext.Provider>
    );
}
