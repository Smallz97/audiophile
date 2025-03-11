import Image from "next/image"
import Pics from "../../../../public/images/product-images/headphones/XX99M2/overview-images/XX99-M2-mobile.png"

export default function ProductDetails() {
    return (
        <div className="flex flex-col gap-20">
            <div id="image-description-container" className="flex flex-col gap-8">
                <div id="product-image-container" className="px-12 pt-10 pb-16 rounded-lg bg-zinc-100">
                    <Image src={Pics} alt="" className="w-full" />
                </div>
                <div id="product-description-container" className="flex flex-col gap-6">
                    <div className="text-3xl font-bold tracking-wider text-black uppercase">
                        XX99 mark ii<br />Headphones
                    </div>
                    <div className="text-base font-normal leading-normal text-black opacity-50">
                        The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                    </div>
                    <div className="text-lg font-bold tracking-wider text-black uppercase">$ 899</div>
                    <div className="flex gap-4">
                        <div className="flex justify-between items-center px-4 w-32 h-12 bg-zinc100 border">
                            <div className="text-xs font-bold tracking-wide text-black uppercase opacity-25">
                                -
                            </div>
                            <div className="text-xs font-bold tracking-wide text-black uppercase">
                                1
                            </div>
                            <div className="text-xs font-bold tracking-wide text-black uppercase opacity-25">
                                +
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-40 h-12 bg-darkorange">
                            <div className="text-xs font-bold tracking-wide text-white uppercase">add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="product-features-container" className="flex flex-col gap-6">
                <div id="container-title" className="text-2xl font-bold leading-9 tracking-wider text-black uppercase">features</div>
                <div className="text-base font-normal leading-normal text-black opacity-50">Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. <br /><br />The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</div>
            </div>
            <div id="in-the-box-container" className="flex flex-col gap-6">
                <div id="container-title" className="text-2xl font-bold leading-9 tracking-wide text-black uppercase">in the box</div>
                <div id="box-contents-container" className="flex flex-col gap-2">
                    <div id="box-content" className="flex gap-6">
                        <div className="text-base font-bold leading-normal text-darkorange">1x</div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 capitalize">headphone unit</div>
                    </div>
                    <div id="box-content" className="flex gap-6">
                        <div className="text-base font-bold leading-normal text-darkorange">2x</div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 capitalize">replacement earcups</div>
                    </div>
                    <div id="box-content" className="flex gap-6">
                        <div className="text-base font-bold leading-normal text-darkorange">1x</div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 capitalize">user manual</div>
                    </div>
                    <div id="box-content" className="flex gap-6">
                        <div className="text-base font-bold leading-normal text-darkorange">1x</div>
                        <div className="text-base font-normal leading-normal text-black opacity-50 capitalize">3.5mm 5m Audio Cable</div>
                    </div>
                </div>
            </div>
            <div id="product-images-container" className=""></div>
        </div>
    )
}