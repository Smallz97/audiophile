"use client"

import { createContext, useContext, useState } from "react";
import { ContextProviderProps, CustomModalContent, CustomModalContextValues } from "@/app/utilities/library/definitions";

const CustomModalContext = createContext<CustomModalContextValues | undefined>(undefined);

export const CustomModalContextProvider = ({ children }: ContextProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState<CustomModalContent | undefined>(undefined)


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setContent(undefined);
    }

    return (
        <CustomModalContext.Provider
            value={{ isModalOpen, content, setContent, openModal, closeModal }}
        >
            {children}
        </CustomModalContext.Provider>
    );
}
export const useCustomModalContext = () => {
    const context = useContext(CustomModalContext);
    if (!context) throw new Error("useCustomModalContext must be used within a CustomModalContextProvider");
    return context;
};
