import clsx from "clsx";
import Link from "next/link";
import { ButtonProps } from "@/app/utilities/library/definitions";

export default function Button({ href, children, className, ...props }: ButtonProps) {
    return (
        <Link
            href={href}
            className={clsx(
                "flex justify-center items-center w-40 h-12 uppercase",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
}