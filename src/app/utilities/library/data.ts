import { cache } from "react";
import { StaticImageData } from "next/image"
import { createPrice } from "@/app/utilities/library/price-utilities";
import { getCategoryProducts, getCategoryImages, generateProductId } from "@/app/utilities/library/functions";
import type { ProductsCategory, ProductsCategoryPagesProps, Product } from "@/app/utilities/library/definitions"

// Image imports for product category cards
import Earphones from "../../../../public/images/category-link-images/earphones-mobile.png"
import Headphones from "../../../../public/images/category-link-images/headphones-mobile.png"
import Speakers from "../../../../public/images/category-link-images/speakers-mobile.png"


// Image imports for suggested products cards
import XX99M2SPI from "../../../../public/images/suggested-products-card/mobile/XX99M2.png"
import XX99M1SPI from "../../../../public/images/suggested-products-card/mobile/XX99M1.png"
import XX59SPI from "../../../../public/images/suggested-products-card/mobile/XX59.png"
import ZX9SPI from "../../../../public/images/suggested-products-card/mobile/ZX9.png"
import ZX7SPI from "../../../../public/images/suggested-products-card/mobile/ZX7.png"


// Image imports for product's featured images
// YX1 Earphones
import YX1FFM from "../../../../public/images/product-images/earphones/YX1/featured-images/mobile/first.png"
import YX1SFM from "../../../../public/images/product-images/earphones/YX1/featured-images/mobile/second.png"
import YX1TFM from "../../../../public/images/product-images/earphones/YX1/featured-images/mobile/third.png"

import YX1FFT from "../../../../public/images/product-images/earphones/YX1/featured-images/tablets/first.png"
import YX1SFT from "../../../../public/images/product-images/earphones/YX1/featured-images/tablets/second.png"
import YX1TFT from "../../../../public/images/product-images/earphones/YX1/featured-images/tablets/third.png"

import YX1FFD from "../../../../public/images/product-images/earphones/YX1/featured-images/desktops/first.png"
import YX1SFD from "../../../../public/images/product-images/earphones/YX1/featured-images/desktops/second.png"
import YX1TFD from "../../../../public/images/product-images/earphones/YX1/featured-images/desktops/third.png"


// XX99M2 Headphones
import XX99M2FFM from "../../../../public/images/product-images/headphones/XX99M2/featured-images/mobile/first.png"
import XX99M2SFM from "../../../../public/images/product-images/headphones/XX99M2/featured-images/mobile/second.png"
import XX99M2TFM from "../../../../public/images/product-images/headphones/XX99M2/featured-images/mobile/third.png"

import XX99M2FFT from "../../../../public/images/product-images/headphones/XX99M2/featured-images/tablets/first.png"
import XX99M2SFT from "../../../../public/images/product-images/headphones/XX99M2/featured-images/tablets/second.png"
import XX99M2TFT from "../../../../public/images/product-images/headphones/XX99M2/featured-images/tablets/third.png"

import XX99M2FFD from "../../../../public/images/product-images/headphones/XX99M2/featured-images/desktops/first.png"
import XX99M2SFD from "../../../../public/images/product-images/headphones/XX99M2/featured-images/desktops/second.png"
import XX99M2TFD from "../../../../public/images/product-images/headphones/XX99M2/featured-images/desktops/third.png"


// XX99M1 Headphones
import XX99M1FFM from "../../../../public/images/product-images/headphones/XX99M1/featured-images/mobile/first.png"
import XX99M1SFM from "../../../../public/images/product-images/headphones/XX99M1/featured-images/mobile/second.png"
import XX99M1TFM from "../../../../public/images/product-images/headphones/XX99M1/featured-images/mobile/third.png"

import XX99M1FFT from "../../../../public/images/product-images/headphones/XX99M1/featured-images/tablets/first.png"
import XX99M1SFT from "../../../../public/images/product-images/headphones/XX99M1/featured-images/tablets/second.png"
import XX99M1TFT from "../../../../public/images/product-images/headphones/XX99M1/featured-images/tablets/third.png"

import XX99M1FFD from "../../../../public/images/product-images/headphones/XX99M1/featured-images/desktops/first.png"
import XX99M1SFD from "../../../../public/images/product-images/headphones/XX99M1/featured-images/desktops/second.png"
import XX99M1TFD from "../../../../public/images/product-images/headphones/XX99M1/featured-images/desktops/third.png"


// XX59 Headphones
import XX59FFM from "../../../../public/images/product-images/headphones/XX59/featured-images/mobile/first.png"
import XX59SFM from "../../../../public/images/product-images/headphones/XX59/featured-images/mobile/second.png"
import XX59TFM from "../../../../public/images/product-images/headphones/XX59/featured-images/mobile/third.png"

import XX59FFT from "../../../../public/images/product-images/headphones/XX59/featured-images/tablets/first.png"
import XX59SFT from "../../../../public/images/product-images/headphones/XX59/featured-images/tablets/second.png"
import XX59TFT from "../../../../public/images/product-images/headphones/XX59/featured-images/tablets/third.png"

import XX59FFD from "../../../../public/images/product-images/headphones/XX59/featured-images/desktops/first.png"
import XX59SFD from "../../../../public/images/product-images/headphones/XX59/featured-images/desktops/second.png"
import XX59TFD from "../../../../public/images/product-images/headphones/XX59/featured-images/desktops/third.png"


// ZX9 Speakers
import ZX9FFM from "../../../../public/images/product-images/speakers/ZX9/featured-images/mobile/first.png"
import ZX9SFM from "../../../../public/images/product-images/speakers/ZX9/featured-images/mobile/second.png"
import ZX9TFM from "../../../../public/images/product-images/speakers/ZX9/featured-images/mobile/third.png"

import ZX9FFT from "../../../../public/images/product-images/speakers/ZX9/featured-images/tablets/first.png"
import ZX9SFT from "../../../../public/images/product-images/speakers/ZX9/featured-images/tablets/second.png"
import ZX9TFT from "../../../../public/images/product-images/speakers/ZX9/featured-images/tablets/third.png"

import ZX9FFD from "../../../../public/images/product-images/speakers/ZX9/featured-images/desktops/first.png"
import ZX9SFD from "../../../../public/images/product-images/speakers/ZX9/featured-images/desktops/second.png"
import ZX9TFD from "../../../../public/images/product-images/speakers/ZX9/featured-images/desktops/third.png"


// ZX7 Speakers
import ZX7FFM from "../../../../public/images/product-images/speakers/ZX7/featured-images/mobile/first.png"
import ZX7SFM from "../../../../public/images/product-images/speakers/ZX7/featured-images/mobile/second.png"
import ZX7TFM from "../../../../public/images/product-images/speakers/ZX7/featured-images/mobile/third.png"

import ZX7FFT from "../../../../public/images/product-images/speakers/ZX7/featured-images/tablets/first.png"
import ZX7SFT from "../../../../public/images/product-images/speakers/ZX7/featured-images/tablets/second.png"
import ZX7TFT from "../../../../public/images/product-images/speakers/ZX7/featured-images/tablets/third.png"

import ZX7FFD from "../../../../public/images/product-images/speakers/ZX7/featured-images/desktops/first.png"
import ZX7SFD from "../../../../public/images/product-images/speakers/ZX7/featured-images/desktops/second.png"
import ZX7TFD from "../../../../public/images/product-images/speakers/ZX7/featured-images/desktops/third.png"

export const productData: Record<string, Product[]> = {
    earphones: [
        {
            productId: generateProductId("earphones", "YX1 Wireless"),
            overviewImage: "/images/product-images/earphones/YX1/overview-images/YX1-mobile.png",
            newProduct: true,
            name: "YX1 Wireless",
            productType: "earphones",
            description:
                "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
            productDetailImage: "/images/product-images/earphones/YX1/product-details-images/YX1-mobile.png",
            price: createPrice(59900),
            features: [
                "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
                "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
            ],
            boxContent: [
                { quantity: 2, item: "earphone unit" },
                { quantity: 6, item: "multi-size earplugs" },
                { quantity: 1, item: "USB-C charging cable" },
                { quantity: 1, item: "user manual" },
                { quantity: 1, item: "travel pouch" },
            ],
            featuredImages: {
                mobile: {
                    first: YX1FFM,
                    second: YX1SFM,
                    third: YX1TFM,
                },
                tablet: {
                    first: YX1FFT,
                    second: YX1SFT,
                    third: YX1TFT,
                },
                desktops: {
                    first: YX1FFD,
                    second: YX1SFD,
                    third: YX1TFD,
                }
            },
            suggestedProductCardImages: Earphones,
            cartImage: "/images/product-images/earphones/YX1/overview-images/YX1-mobile.png"
        },
    ],
    headphones: [
        {
            productId: generateProductId("headphones", "XX99 Mark II"),
            overviewImage: "/images/product-images/headphones/XX99M2/overview-images/XX99-M2-mobile.png",
            newProduct: true,
            name: "XX99 Mark II",
            productType: "headphones",
            description:
                "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
            productDetailImage: "/images/product-images/headphones/XX99M2/product-details-images/XX99-M2-mobile.png",
            price: createPrice(299900),
            features: [
                "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
                "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
            ],
            boxContent: [
                { quantity: 1, item: "headphone unit" },
                { quantity: 2, item: "replacement earcups" },
                { quantity: 1, item: "3.5mm 5m audio cable" },
                { quantity: 1, item: "user manual" },
                { quantity: 1, item: "travel bag" },
            ],
            featuredImages: {
                mobile: {
                    first: XX99M2FFM,
                    second: XX99M2SFM,
                    third: XX99M2TFM,
                },
                tablet: {
                    first: XX99M2FFT,
                    second: XX99M2SFT,
                    third: XX99M2TFT,
                },
                desktops: {
                    first: XX99M2FFD,
                    second: XX99M2SFD,
                    third: XX99M2TFD,
                }
            },
            suggestedProductCardImages: XX99M2SPI,
            cartImage: "/images/product-images/headphones/XX99M2/overview-images/XX99-M2-mobile.png",
        },
        {
            productId: generateProductId("headphones", "XX99 Mark I"),
            overviewImage: "/images/product-images/headphones/XX99M1/overview-images/XX99-M1-mobile.png",
            newProduct: false,
            name: "XX99 Mark I",
            productType: "headphones",
            description:
                "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
            productDetailImage: "/images/product-images/headphones/XX99M1/product-details-images/XX99-M1-mobile.png",
            price: createPrice(175000),
            features: [
                "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
                "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
            ],
            boxContent: [
                { quantity: 1, item: "headphone unit" },
                { quantity: 2, item: "replacement earcups" },
                { quantity: 1, item: "3.5mm 5m audio cable" },
                { quantity: 1, item: "user manual" },
            ],
            featuredImages: {
                mobile: {
                    first: XX99M1FFM,
                    second: XX99M1SFM,
                    third: XX99M1TFM,
                },
                tablet: {
                    first: XX99M1FFT,
                    second: XX99M1SFT,
                    third: XX99M1TFT,
                },
                desktops: {
                    first: XX99M1FFD,
                    second: XX99M1SFD,
                    third: XX99M1TFD,
                }
            },
            suggestedProductCardImages: XX99M1SPI,
            cartImage: "/images/product-images/headphones/XX99M1/overview-images/XX99-M1-mobile.png",
        },
        {
            productId: generateProductId("headphones", "XX59"),
            overviewImage: "/images/product-images/headphones/XX59/overview-images/XX59-mobile.png",
            newProduct: false,
            name: "XX59",
            productType: "headphones",
            description:
                "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
            productDetailImage: "/images/product-images/headphones/XX59/product-details-images/XX59-mobile.png",
            price: createPrice(89900),
            features: [
                "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
                "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
            ],
            boxContent: [
                { quantity: 1, item: "headphone unit" },
                { quantity: 2, item: "replacement earcups" },
                { quantity: 1, item: "3.5mm 5m audio cable" },
                { quantity: 1, item: "user manual" },
            ],
            featuredImages: {
                mobile: {
                    first: XX59FFM,
                    second: XX59SFM,
                    third: XX59TFM,
                },
                tablet: {
                    first: XX59FFT,
                    second: XX59SFT,
                    third: XX59TFT,
                },
                desktops: {
                    first: XX59FFD,
                    second: XX59SFD,
                    third: XX59TFD,
                }
            },
            suggestedProductCardImages: XX59SPI,
            cartImage: "/images/product-images/headphones/XX59/overview-images/XX59-mobile.png",
        },
    ],
    speakers: [
        {
            productId: generateProductId("speakers", "ZX9"),
            overviewImage: "/images/product-images/speakers/ZX9/overview-images/ZX9-mobile.png",
            newProduct: true,
            name: "ZX9",
            productType: "speakers",
            description:
                "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
            productDetailImage: "/images/product-images/speakers/ZX9/product-details-images/ZX9-mobile.png",
            price: createPrice(450000),
            features: [
                "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
                "Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
            ],
            boxContent: [
                { quantity: 2, item: "speakers unit" },
                { quantity: 1, item: "3.5mm 5m audio cable" },
                { quantity: 1, item: "10m optical cable" },
                { quantity: 1, item: "user manual" },
                { quantity: 2, item: "speaker cloth panel" },
            ],
            featuredImages: {
                mobile: {
                    first: ZX9FFM,
                    second: ZX9SFM,
                    third: ZX9TFM,
                },
                tablet: {
                    first: ZX9FFT,
                    second: ZX9SFT,
                    third: ZX9TFT,
                },
                desktops: {
                    first: ZX9FFD,
                    second: ZX9SFD,
                    third: ZX9TFD,
                }
            },
            suggestedProductCardImages: ZX9SPI,
            cartImage: "/images/product-images/speakers/ZX9/overview-images/ZX9-mobile.png"
        },
        {
            productId: generateProductId("speakers", "ZX7"),
            overviewImage: "/images/product-images/speakers/ZX7/overview-images/ZX7-mobile.png",
            newProduct: false,
            name: "ZX7",
            productType: "speakers",
            description:
                "Stream high-quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represent the top-of-the-line powered speakers for home or studio use.",
            productDetailImage: "/images/product-images/speakers/ZX7/product-details-images/ZX7-mobile.png",
            price: createPrice(350000),
            features: [
                "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
                "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
            ],
            boxContent: [
                { quantity: 2, item: "speakers unit" },
                { quantity: 1, item: "3.5mm 7.5m audio cable" },
                { quantity: 1, item: "7.5m optical cable" },
                { quantity: 1, item: "user manual" },
                { quantity: 2, item: "speaker cloth panel" },
            ],
            featuredImages: {
                mobile: {
                    first: ZX7FFM,
                    second: ZX7SFM,
                    third: ZX7TFM,
                },
                tablet: {
                    first: ZX7FFT,
                    second: ZX7SFT,
                    third: ZX7TFT,
                },
                desktops: {
                    first: ZX7FFD,
                    second: ZX7SFD,
                    third: ZX7TFD,
                }
            },
            suggestedProductCardImages: ZX7SPI,
            cartImage: "/images/product-images/speakers/ZX7/overview-images/ZX7-mobile.png"
        },
    ],
};

export const images: Record<string, StaticImageData> = {
    earphones: Earphones,
    headphones: Headphones,
    speakers: Speakers,
};

export const categoryPages: ProductsCategoryPagesProps[] = [
    {
        name: 'Earphones',
        slug: 'earphones',
        description: 'Compact and high-performance wireless earbuds',
        metaDescription: 'Wireless earphones and earbuds with exceptional sound quality and comfort',
        keywords: ['earphones', 'earbuds', 'wireless', 'bluetooth', 'audio']
    },
    {
        name: 'Headphones',
        slug: 'headphones',
        description: 'Explore our premium headphone collection',
        metaDescription: 'Discover high-quality headphones for every audio experience',
        keywords: ['headphones', 'audio', 'music', 'sound']
    },
    {
        name: 'Speakers',
        slug: 'speakers',
        description: 'Powerful speakers for home and professional use',
        metaDescription: 'Find the perfect speakers for your home, party, or professional setup',
        keywords: ['speakers', 'audio', 'sound system', 'home theater']
    },
]

const categoryMap = Object.fromEntries(categoryPages.map((category) => [category.slug, category]));

export const productCategories: ProductsCategory[] = Object.values(categoryMap).map((category) => ({
    categoryName: category.slug,
    products: getCategoryProducts(category.slug),
    categoryImage: getCategoryImages(category.slug),
}));

export const getProductsListOfSingleCategory = cache((slug: string) => {
    return productCategories.find(p => p.categoryName === slug)!.products;
});

export const getAllProducts = () => {
    return Object.values(productData).flat();
}