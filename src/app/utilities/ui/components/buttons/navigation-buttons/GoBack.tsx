'use client'

import { useRouter } from 'next/navigation'

export default function GoBackButton() {
    const router = useRouter()

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="opacity-50 text-black text-base font-normal leading-normal text-left p-0 m-0 bg-transparent border-none"
        >
            Go back
        </button>
    )
}