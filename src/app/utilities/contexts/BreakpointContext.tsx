"use client"

import { createContext, useState, useEffect, useContext } from "react"
import type { Breakpoint, ContextProviderProps } from "@/app/utilities/library/definitions"

const BreakpointContext = createContext<Breakpoint>("sm")

export function BreakpointProvider({ children }: ContextProviderProps) {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm")

    useEffect(() => {
        const determineBreakpoint = () => {
            const width = window.innerWidth
            if (width >= 1536) return "2xl"
            if (width >= 1280) return "xl"
            if (width >= 1024) return "lg"
            if (width >= 768) return "md"
            return "sm"
        }

        setBreakpoint(determineBreakpoint())

        const handleResize = () => {
            setBreakpoint(determineBreakpoint())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return <BreakpointContext.Provider value={breakpoint}>{children}</BreakpointContext.Provider>
}

export function useBreakpoint() {
    const context = useContext(BreakpointContext);
    if (!context) throw new Error("useBreakpoint must be used within a BreakpointProvider");
    return context;
}