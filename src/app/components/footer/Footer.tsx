import { AudiophileLogo, SocialLinks } from "../../../../public/icons"
export default function Footer() {
    return (
        <div className="flex flex-col gap-12 items-center bg-justblack text-secondwhite pb-9 px-6">
            <div className="w-24 h-1 bg-orange-400" />
            <div id="brand-logo" className="flex h-6 w-36 justify-center items-center">
                <AudiophileLogo />
            </div>
            <div id="footer-links" className="flex flex-col gap-4 text-center text-sm font-bold leading-normal tracking-widest uppercase">
                <div id="home-link">Home</div>
                <div id="headphones-link">Headphones</div>
                <div id="speakers-link">Speakers</div>
                <div id="earphones-link">Earphones</div>
            </div>
            <div id="brand-description" className="text-center text-base font-normal leading-normal opacity-50">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
            </div>
            <div id="copyright-and-social-icons-wrapper" className="flex flex-col items-center gap-12">
                <div id="copyright" className="text-center text-base font-bold leading-normal opacity-50">
                    Copyright 2021. All Rights Reserved
                </div>
                <div id="social-icons" className="flex w-24 h-6 justify-center items-center">
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}