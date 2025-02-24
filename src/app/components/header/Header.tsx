"use client";
import { usePathname } from "next/navigation";
export default function Header() {
    const pathname = usePathname();
    return (
        <div className="bg-black">
            {pathname === "/" ?
                (
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
                                <div className="flex justify-center items-center w-40 h-12 border border-black bg-darkorange">
                                    <div className="text-xs font-bold tracking-wide text-white uppercase">See Product</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div id="categorypages-header" className="py-8 text-2xl font-bold tracking-widest text-white text-center uppercase">
                        headphones
                    </div>
                )
            }

        </div>
    )
}