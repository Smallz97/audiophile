import type { ReactNode } from "react";
import { StaticImageData, ImageProps } from "next/image";

// Defining the props for all context providers
export type ContextProviderProps = {
    children: ReactNode
}

// Defining the breakpoints for the media responsiveness context
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl"

// Defining the cart modal context values
export type CartModalContextValues = {
    isOpen: boolean;
    cart: ModalCart;
    openModal: () => void;
    closeModal: () => void;
    fetchCart: () => Promise<void>;
};

// Defining the props for a products category page
export type ProductsCategoryPagesProps = {
    name: string;
    slug: string;
    keywords: string[];
    description: string;
    metaDescription: string;
};

// Defining the props for the header component
export type HeaderProps = {
    title?: string;
};

// Defining the props for a link button component
export type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

// Defining the props for the add-to-cart button component
export type AddToCartButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    productId: string;
    quantity: number;
}

// Defining the props for the remove-from-cart button component
export type RemovefromCartButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { 
    productId: string 
}

// Defiing the props for the cart-modal-quantity-control button component
export type CartModalCounterButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    item: ModalCartItem
}

// Defining the props type for the counter button component
export type ProductPageCounterButtonProps = {
    min?: number;
    max?: number;
    count: number;
    isPending?: boolean;
    onIncrement?: () => void;
    onDecrement?: () => void;
    setCount?: (value: number) => void;
};

// Defining the props for the responsive images component
export type ResponsiveImageProps = Omit<ImageProps, "src"> & {
    srcSet: {
      mobile: StaticImageData,
      tablet: StaticImageData,
      desktop?: StaticImageData
    }
}

// Defining the props for the product details Image component
export type ProductImageProps = {
    image: string;
}

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

// Defining the images set for different screen sizes
export type ImageSet = {
    mobile: FeaturedImages;
    tablet: FeaturedImages;
    desktops: FeaturedImages;
}

// Defining the props for the responsive featured-images component
export type ProductFeaturedImagesProps = {
    className?: string;
    containerClassName?: string;
    images: ImageSet;
}

// Defining a price object
export type Price = {
    amount: number;
    currency: string;
};

// Defining the props for a price component
export type PriceComponentProps = {
    price: Price;
    productId: string;
}

// Defining a product object
export type Product = {
    productId: string;
    cartImage: string;
    overviewImage: string;
    newProduct: boolean;
    name: string;
    productType: string;
    description: string;
    productDetailImage: string;
    price: Price;
    features: string[];
    boxContent: BoxContents[];
    featuredImages: ImageSet;
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
    categoryName: string;
    products: Product[];
    categoryImage: StaticImageData;
}

// Defining the props for the categories-list component
export type CategoriesListProps = {
    path: string | undefined;
}

// Defining a lightweight cart item object with only productId and quantity for cookie storage
export type ServerCartItem = {
    productId: string;
    quantity: number;
};

// Defining a lightweight cart object containing server cart items for cookie storage and retrieval
export type ServerCart = {
    items: ServerCartItem[];
};

// Defining the full cart item object with product details for display in the cart modal
export type ModalCartItem = {
    productId: string
    quantity: number
    product: {
      name: string
      price: Price
      image: string
    }
}

// Defining the modal cart object with full product details and price for display in the cart modal
export type ModalCart = {
    items: ModalCartItem[];
    formattedTotalPrice: string
}

// Defining the props for the cart modal component
export type CartModalProps = {
    cart: ModalCart;
}