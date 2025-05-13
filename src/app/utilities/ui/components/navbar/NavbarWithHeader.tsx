"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categoryPages } from "@/app/utilities/library/data";
import Button from "@/app/utilities/ui/components/buttons/cta-buttons/Button";
import { useCartModal } from "@/app/utilities/contexts/CartContext";
import { HamburgerIcon, AudiophileLogo, ShoppingCartIcon } from "@/app/utilities/ui/icons";

export default function NavbarWithHeader() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const category = categoryPages.find(cat => `/${cat.slug}` === pathname);
    const isCategoryPage = Boolean(category);
    const categoryTitle = category?.name ?? "";

    const { openModal, cart } = useCartModal();
    const items = cart.items
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div className="bg-black">
            <nav className="flex justify-between items-center py-8 px-4 border-b border-white/10">
                <div className="flex w-4 h-3.5"><HamburgerIcon /></div>
                <Link href={"/"} className="flex w-36 h-6"><AudiophileLogo /></Link>
                <button
                    onClick={openModal}
                    className="relative p-1"
                >
                    <div className="flex h-[1.25rem] w-[1.4375rem]">
                        <ShoppingCartIcon />
                    </div>
                    {items.length > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-darkorange text-xs text-white">
                            {totalItems}
                        </span>
                    )}
                </button>
            </nav>
            {(isHomePage || isCategoryPage) && (
                isHomePage ? (
                    <div
                        id="homepage-header"
                        className="bg-[url('/images/hero-images/mobile.png')] bg-bottom min-[390px]:bg-center min-[390px]:bg-cover md:bg-[url('/images/hero-images/tablet.png')] bg-no-repeat py-28 md:py-0 md:pb-48 md:pt-36 px-6 md:px-48"
                    >
                        <div className="flex flex-col gap-4 md:gap-6 items-center">
                            <div className="text-sm font-normal tracking-[10px] text-white opacity-50 text-center uppercase">
                                new product
                            </div>
                            <div className="flex flex-col justify-center items-center gap-7 md:gap-10">
                                <div className="flex flex-col gap-6 items-center">
                                    <div className="text-4xl md:text-5xl font-bold leading-10 md:leading-[58px] tracking-wider md:tracking-widest text-white text-center uppercase">
                                        XX99 Mark II<br />headphones
                                    </div>
                                    <div className="text-base font-normal leading-normal text-white opacity-75 text-center">
                                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                                    </div>
                                </div>
                                <Button
                                    href={`/headphones/XX99 Mark II`}
                                    className={`text-xs font-bold tracking-wider bg-darkorange text-white`}
                                >
                                    see product
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        id="categorypages-header"
                        className="py-8 md:py-24 text-2xl md:text-4xl font-bold tracking-widest text-white text-center uppercase"
                    >
                        {categoryTitle}
                    </div>
                )
            )}
        </div>
    );
}
