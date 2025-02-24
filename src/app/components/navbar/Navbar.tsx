import { HamburgerIcon, AudiophileLogo, ShoppingCartIcon } from "@/app/utilities/library/icons";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center py-8 px-4 bg-black">
            <div className="flex w-4 h-3.5"><HamburgerIcon /></div>
            <Link href={"/"} className="flex w-36 h-6"><AudiophileLogo /></Link>
            <div className="flex w-6 h-5"><ShoppingCartIcon /></div>
        </div>
    )
}