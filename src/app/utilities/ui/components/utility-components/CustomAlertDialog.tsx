'use client'

import { useEffect } from "react"
import { useCustomModalContext } from "@/app/utilities/contexts/CustomModalContext";

export default function CustomAlertDialog() {
    const { isModalOpen, closeModal, content } = useCustomModalContext();

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModal()
        }

        if (isModalOpen) {
            document.addEventListener("keydown", handleEscapeKey)
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey)
        }
    }, [isModalOpen, closeModal])

    if (!isModalOpen || !content) return null;

    return (
        <div
            id="modal-opaque-backdrop"
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-6"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 rounded-lg bg-white px-[1.75rem] md:px-[2.06rem] py-8 shadow-lg flex flex-col gap-6 w-full md:w-7/12 lg:w-5/12"
            >
                <button
                    id="close-button"
                    aria-label="Close"
                    onClick={closeModal}
                    className="absolute -top-4 -right-4 text-white text-lg font-bold bg-red-500 rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                >
                    x
                </button>
                <div
                    id="dialog-content"
                    className="flex flex-col justify-center items-center gap-2 h-[50dvh] md:h-[25dvh] bg-zinc-100 rounded-md w-full"
                >
                    <div className="text-center opacity-50 text-lg px-4">{content}</div>
                </div>
            </div>
        </div>
    );
};


{/* <div className="flex flex-col justify-center items-center gap-2">
    <div className="flex w-10 h-10 flex-shrink-0">
        <ShoppingCartIcon />
    </div>
    <div className="text-center opacity-50 text-lg">Your cart is empty.</div>
</div> */}