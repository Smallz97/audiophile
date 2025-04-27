import Link from "next/link"
import { AudiophileLogo, SocialLinks } from "@/app/utilities/ui/icons"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-12 items-center bg-justblack pb-9 px-6">
            <div className="w-24 h-1 bg-orange-400" />
            <Link href={`/`}><div id="brand-logo" className="flex w-36 h-6"><AudiophileLogo /></div></Link>
            <div id="footer-links" className="flex flex-col gap-4 text-sm font-bold leading-normal tracking-widest text-white text-center uppercase">
                <Link href={`/`}><div id="home-link">Home</div></Link>
                <Link href={`/headphones`}><div id="headphones-link">Headphones</div></Link>
                <Link href={`/speakers`}><div id="speakers-link">Speakers</div></Link>
                <Link href={`/earphones`}><div id="earphones-link">Earphones</div></Link>
            </div>
            <div id="brand-description" className="text-base font-normal leading-normal text-white opacity-50 text-center">
                Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
            </div>
            <div id="copyright-and-social-icons-wrapper" className="flex flex-col items-center gap-12">
                <div id="copyright" className="text-base font-bold leading-normal text-white opacity-50 text-center">
                    Copyright 2021. All Rights Reserved
                </div>
                <div id="social-icons" className="flex justify-center items-center w-24 h-6"><SocialLinks /></div>
            </div>
        </footer>
    )
}