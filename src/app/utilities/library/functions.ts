import { Product } from "./definitions"
import { StaticImageData } from "next/image"
import { CategoryOfProductsPageProps } from "./definitions"

import YX1 from  "../../../../public/images/product-images/earphones/YX1/product-images/YX1-mobile.png"
import XX59 from "../../../../public/images/product-images/headphones/XX59/product-images/XX59-mobile.png"
import XX991 from "../../../../public/images/product-images/headphones/XX99M1/product-images/XX99-M1-mobile.png"
import XX992 from "../../../../public/images/product-images/headphones/XX99M2/product-images/XX99-M2-mobile.png"
import ZX7 from "../../../../public/images/product-images/speakers/ZX7/product-images/ZX7-mobile.png"
import ZX9 from "../../../../public/images/product-images/speakers/ZX9/product-images/ZX9-mobile.png"

import Earphones from "../../../../public/images/category-link-images/earphones-mobile.png"
import Headphones from "../../../../public/images/category-link-images/headphones-mobile.png"
import Speakers from "../../../../public/images/category-link-images/speakers-mobile.png"

export const categories: CategoryOfProductsPageProps[] = [
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
    return categories.find(category => category.slug === slug);
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
            },
            {
                name: "XX99 Mark I",
                productType: "headphones",
                description:
                    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
                image: XX991,
            },
            {
                name: "XX59",
                productType: "headphones",
                description:
                    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
                image: XX59,
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
            },
            {
                name: "ZX7",
                productType: "speakers",
                description:
                    "Stream high-quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represent the top-of-the-line powered speakers for home or studio use.",
                image: ZX7,
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