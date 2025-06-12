import clsx from "clsx";
import Link from "next/link";
import { LinkButtonProps } from "@/app/utilities/library/definitions";

export default function LinkButton({ href, children, className, ...props }: LinkButtonProps) {
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