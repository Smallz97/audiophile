import type { ReactNode } from "react";
import { StaticImageData } from "next/image";

// Defining the props type for the header component
export type HeaderProps = {
    title?: string;
};

// Defining the props type for a button component
export type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

// Defining the props type for the counter button component
export type CounterProps = {
    initialValue?: number;
    min?: number;
    max?: number;
};

// Defining the props type for a products category page
export type ProductsCategoryPagesProps = {
    name: string;
    slug: string;
    description: string;
    metaDescription: string;
    keywords: string[];
};

// Defining the props type for a product's featured images object
export type FeaturedImages = {
    first: StaticImageData;
    second: StaticImageData;
    third: StaticImageData;
}

// Defining the props type for the displayed product's featured images, based on the viewport
export type BreakpointDetectedFeaturedImages = {
    mobile: FeaturedImages;
    tablet: FeaturedImages;
    desktops: FeaturedImages;
}

// export type SuggestedProductCardImages = {
//     mobile: StaticImageData;
//     tablet: StaticImageData;
//     desktop: StaticImageData
// }

// Defining a product object type
export type Product = {
    overviewImage: StaticImageData;
    newProduct: boolean;
    name: string;
    productType: string;
    description: string;
    productDetailImage: StaticImageData;
    features: string[];
    boxContent: BoxContents[];
    featuredImages: BreakpointDetectedFeaturedImages;
    suggestedProductCardImages: StaticImageData;
}

// Defining a products category object type
export type ProductsCategory = {
    category: string;
    products: Product[];
    categoryImage: StaticImageData;
}

// Defining the props type for the categories-list component
export type CategoriesListProps = {
    categories: ProductsCategory[];
}

// Defining the props type for the product-list component
export type ProductsListProps = {
    productsList: Product[];
}

// Defining the props type for the product-details component
export type ProductDetailsProps = {
    product: Product;
}

// Defining the props type for the in-the-box component
export type BoxContents = {
    quantity: number;
    item: string;
}

// Defining the props for the provider component
export type BreakpointProviderProps = {
    children: ReactNode
}

// Defining the breakpoints for media responsiveness
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl"

// Defining the props type for the responsive image component
export type ResponsiveFeaturedImagesProps = {
    className?: string;
    containerClassName?: string;
    images: BreakpointDetectedFeaturedImages;
}

export type SuggestedProductCardProps = {
    products: Product[];
}