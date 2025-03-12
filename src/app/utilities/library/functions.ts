import { Product } from "./definitions"
import { StaticImageData } from "next/image"
import { ProductsCategroyPageProps } from "./definitions"

import YX1 from  "../../../../public/images/product-images/earphones/YX1/product-images/YX1-mobile.png"
import XX59 from "../../../../public/images/product-images/headphones/XX59/product-images/XX59-mobile.png"
import XX991 from "../../../../public/images/product-images/headphones/XX99M1/product-images/XX99-M1-mobile.png"
import XX992 from "../../../../public/images/product-images/headphones/XX99M2/product-images/XX99-M2-mobile.png"
import ZX7 from "../../../../public/images/product-images/speakers/ZX7/product-images/ZX7-mobile.png"
import ZX9 from "../../../../public/images/product-images/speakers/ZX9/product-images/ZX9-mobile.png"

import Earphones from "../../../../public/images/category-link-images/earphones-mobile.png"
import Headphones from "../../../../public/images/category-link-images/headphones-mobile.png"
import Speakers from "../../../../public/images/category-link-images/speakers-mobile.png"

export const pageCategories: ProductsCategroyPageProps[] = [
    {
        slug: 'earphones',
        name: 'Earphones',
        description: 'Compact and high-performance wireless earbuds',
        metaDescription: 'Wireless earphones and earbuds with exceptional sound quality and comfort',
        keywords: ['earphones', 'earbuds', 'wireless', 'bluetooth', 'audio']
    },
    {
        slug: 'headphones',
        name: 'Headphones',
        description: 'Explore our premium headphone collection',
        metaDescription: 'Discover high-quality headphones for every audio experience',
        keywords: ['headphones', 'audio', 'music', 'sound']
    },
    {
        slug: 'speakers',
        name: 'Speakers',
        description: 'Powerful speakers for home and professional use',
        metaDescription: 'Find the perfect speakers for your home, party, or professional setup',
        keywords: ['speakers', 'audio', 'sound system', 'home theater']
    },
]

export function findMatchingCategory(slug: string) {
    return pageCategories.find(category => category.slug === slug);
}

export function getProductsOfCategory(categorySlug: string) {
    const productData: Record<string, Product[]> = {
        earphones: [
            {
                name: "YX1 Wireless",
                productType: "earphones",
                description:
                    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
                image: YX1,
                newProduct: true,
                features: [
                    "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
                    "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
                ]
            },
        ],
        headphones: [
            {
                name: "XX99 Mark II",
                productType: "headphones",
                description:
                    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
                image: XX992,
                newProduct: true,
                features: [
                    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
                    "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
                ]
            },
            {
                name: "XX99 Mark I",
                productType: "headphones",
                description:
                    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
                image: XX991,
                features: [
                    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
                    "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
                ]
            },
            {
                name: "XX59",
                productType: "headphones",
                description:
                    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
                image: XX59,
                features: [
                    "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
                    "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
                ]
            },
        ],
        speakers: [
            {
                name: "ZX9",
                productType: "speakers",
                description:
                    "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
                image: ZX9,
                newProduct: true,
                features: [
                    "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
                    "Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
                ]
            },
            {
                name: "ZX7",
                productType: "speakers",
                description:
                    "Stream high-quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represent the top-of-the-line powered speakers for home or studio use.",
                image: ZX7,
                features: [
                    "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
                    "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
                ]
            },
        ],
    };

    return productData[categorySlug];
}

export function getCategoryImages(categorySlug: string) {
    const images: Record<string, StaticImageData> = {
        earphones: Earphones,
        headphones: Headphones,
        speakers: Speakers,
    };

    return images[categorySlug];
}