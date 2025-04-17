"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react"
import { usePathname } from "next/navigation";
import { categoryPages } from "@/app/utilities/library/data";
import Button from "@/app/utilities/ui/components/buttons/Button";
import { useCartModal } from "@/app/utilities/contexts/ModalContexts";
import { HamburgerIcon, AudiophileLogo } from "@/app/utilities/ui/icons";



export default function NavbarWithHeader() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const category = categoryPages.find(cat => `/${cat.slug}` === pathname);
    const isCategoryPage = Boolean(category);
    const categoryTitle = category?.name ?? "";

    // Mock data
    const mockCartItems = [
        { id: 1, name: "XX99 MK II", price: 129.99, quantity: 1 },
        { id: 6, name: "XX99 MK I", price: 199.99, quantity: 1 },
        { id: 2, name: "XX59", price: 89.99, quantity: 2 },
        { id: 3, name: "YX1", price: 199.99, quantity: 1 },
        { id: 4, name: "ZX9", price: 199.99, quantity: 1 },
        { id: 5, name: "ZX7", price: 199.99, quantity: 1 },
    ]

    const { openModal } = useCartModal();

    return (
        <div className="bg-black">
            <nav className="flex justify-between items-center py-8 px-4 border-b border-white/10">
                <div className="flex w-4 h-3.5"><HamburgerIcon /></div>
                <Link href={"/"} className="flex w-36 h-6"><AudiophileLogo /></Link>
                <button
                    onClick={openModal}
                    className="relative p-1 border rounded-md bg-gray-100"
                >
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                        {mockCartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                </button>
            </nav>
            {(isHomePage || isCategoryPage) && (
                isHomePage ? (
                    <div id="homepage-header" className="bg-[url('/images/hero-images/mobile.png')] bg-bottom min-[390px]:bg-center min-[390px]:bg-cover bg-no-repeat py-28 px-6">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="text-sm font-normal tracking-widest text-white opacity-50 text-center uppercase">
                                new product
                            </div>
                            <div className="flex flex-col justify-center items-center gap-6">
                                <div className="text-4xl font-bold leading-10 tracking-wider text-white text-center uppercase">
                                    XX99 Mark II<br />headphones
                                </div>
                                <div className="text-base font-normal leading-normal text-white opacity-75 text-center">
                                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                                </div>
                                <Button href={`/headphones/XX99 Mark II`} className={`text-xs font-bold tracking-wide bg-darkorange text-white`}>
                                    see product
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id="categorypages-header" className="py-8 text-2xl font-bold tracking-widest text-white text-center uppercase">
                        {categoryTitle}
                    </div>
                )
            )}
        </div>
    );
}
