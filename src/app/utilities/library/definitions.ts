import type { ReactNode } from "react";
import { StaticImageData } from "next/image";

// Defining the breakpoints for media responsiveness context
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl"

// Defining the type for the cart modal context
export type CartModalContextType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

// Defining the props for a products category page
export type ProductsCategoryPagesProps = {
    name: string;
    slug: string;
    description: string;
    metaDescription: string;
    keywords: string[];
};

// Defining the props for the provider component
export type BreakpointProviderProps = {
    children: ReactNode
}

// Defining the props for the header component
export type HeaderProps = {
    title?: string;
};

// Defining the props for a button component
export type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

// Defining the props type for the counter button component
export type CounterProps = {
    initialValue?: number;
    min?: number;
    max?: number;
};

// Defining the props for the product description component
export type ProductDescriptionProps = {
    name: string;
    productType: string;
    description: string;
}

// Defining the props for the product features component
export type ProductFeaturesProps = {
    features: string[]
}

// Defining the props for the box-contents component
export type BoxContents = {
    quantity: number;
    item: string;
}

// Defining the featured images object
export type FeaturedImages = {
    first: StaticImageData;
    second: StaticImageData;
    third: StaticImageData;
}

// Defining the images object for the Responsive featured images component
export type BreakpointDetectedFeaturedImages = {
    mobile: FeaturedImages;
    tablet: FeaturedImages;
    desktops: FeaturedImages;
}

// Defining the props for the responsive images component
export type ResponsiveFeaturedImagesProps = {
    className?: string;
    containerClassName?: string;
    images: BreakpointDetectedFeaturedImages;
}

// Defining a price object
export type Price = {
    amount: number;
    currency: string;
};

// Defining the props for a price component
export type PriceComponentProps = {
    price: Price;
}

// Defining a product object
export type Product = {
    productId: string;
    overviewImage: StaticImageData;
    newProduct: boolean;
    name: string;
    productType: string;
    description: string;
    productDetailImage: StaticImageData;
    price: Price;
    features: string[];
    boxContent: BoxContents[];
    featuredImages: BreakpointDetectedFeaturedImages;
    suggestedProductCardImages: StaticImageData;
}

// Defining the props for the suggested products card component
export type SuggestedProductCardProps = {
    products: Product[];
}

// Defining the props for the product-details component
export type ProductDetailsProps = {
    product: Product;
}

// Defining the props for the product-list component
export type ProductsListProps = {
    productsList: Product[];
}

// Defining a products category object
export type ProductsCategory = {
    category: string;
    products: Product[];
    categoryImage: StaticImageData;
}

// Defining the props for the categories-list component
export type CategoriesListProps = {
    categories: ProductsCategory[];
}

// Defining a lightweight cart item object with only productId and quantity for cookie storage
export type CartItem = {
    productId: string;
    quantity: number;
};

// Defining the full cart item object with product details for display in the cart modal
export type CartItemWithProduct = {
    productId: string
    quantity: number
    product: {
      name: string
      price: number
      image?: StaticImageData
    }
}

// Defining a lightweight cart object containing cart items for cookie storage and retrieval
export type Cart = {
    items: CartItem[];
};

// Defining a full cart object with product details for display in the cart modal
export type CartWithProducts = {
    items: CartItemWithProduct[]
    totalItems: number
}

// Defining the props for the cart-modal component
export interface CartModalProps {
    isOpen: boolean
    onClose: () => void
    items: CartItemWithProduct[]
}