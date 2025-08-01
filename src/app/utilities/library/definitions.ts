import type { ReactNode } from "react";
import { StaticImageData, ImageProps } from "next/image";

// Defining the props for an error class with a status code
export type ErrorWithStatus = Error & {
  status: number;
};

// Defining the props for all context providers
export type ContextProviderProps = { children: ReactNode }

// Defining the type for the custom modal content
export type CustomModalContent = string;

// Defining the custom modal context values
export type CustomModalContextValues = {
  isModalOpen: boolean;
  content: CustomModalContent | undefined;
  setContent: (content: CustomModalContent | undefined) => void;
  openModal: () => void;
  closeModal: () => void;
}

// Defining the breakpoints for the media responsiveness context
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl"

// Defining the cart context values
export type CartContextValues = {
    cart: CartObject;
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    fetchCart: () => Promise<void>;
};

// Defining the checkout form context values
export type CheckoutFormContextValues = {
    formData: FormData
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
    errors: Record<string, string>
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
    validateField: (name: string, value: string) => string
}

// Defining the props for the header component
export type HeaderProps = {
    title?: string;
};

// Defining a custom current-category path object
export type CurrentPath = {
    path: string | undefined;
};

// Defining the props for a products-category page
export type ProductsCategoryPagesProps = {
    name: string;
    slug: string;
    keywords: string[];
    description: string;
    metaDescription: string;
};

// Defining the props for a link button
export type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

// Defining the props for a unified cart control button
export type CartActionButtonProps = {
  productId: string;
  quantity: number;
  isInCart: boolean;
};

// Defining the props for the cart modal quantity-control button
export type CartModalCounterButtonProps = {
    item: CartItem
}

// Defining the props type for the price-component quantity-control button
export type ProductPageCounterButtonProps = {
    min: number;
    quantity: number;
    isInCart: boolean;
    productId: string;
    quantityInStock: number;
    setQuantity: (value: number) => void;
};

// Defining the props for the featured-product-component's responsive-image component
export type FeaturedProductResponsiveImageProps = Omit<ImageProps, "src"> & {
    srcSet: {
      mobile: StaticImageData,
      tablet: StaticImageData,
      desktop?: StaticImageData
    }
}

// Defining the product's featured images object
export type FeaturedImages = {
    first: StaticImageData;
    second: StaticImageData;
    third: StaticImageData;
}

// Defining an object of featured-product-images, grouped based on screen sizes
export type SetOfFeaturedImages = {
    mobile: FeaturedImages;
    tablet: FeaturedImages;
    desktops: FeaturedImages;
}

// Defining the props for the box-contents component
export type BoxContents = {
    quantity: number;
    item: string;
}

// Defining a price type
export type Price = number;

// Defining the props for the price functions
export type PriceFunctionProps = {
  amount: Price;
  currency?: string;
  userLocale?: string;
};

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
    featuredImages: SetOfFeaturedImages;
    suggestedProductCardImages: StaticImageData;
    numberInStock: number;
}

// Defining a product category
export type ProductsCategory = {
    categoryName: string;
    products: Product[];
    categoryImage: StaticImageData;
};

// Defining the props for the product-category card
export type ProductCategoryCardProps = {
    category: {
        categoryName: string;
        categoryImage: StaticImageData;
    }
};

// Defining an object of all products in a given category
export type ProductsInASingleCategory = {
    products: Product[];
}

// Defining the props for the product-overview card
export type ProductOverviewCardProps = {
    product: Product;
    index: number;
}

// Defining the props for the product-details component
export type ProductDetailsProps = {
    product: Product;
}

// Defining the props for the product image component
export type ProductImageProps = {
    image: string;
}

// Defining the props for the product-description component
export type ProductDescriptionProps = {
    name: string;
    productType: string;
    description: string;
}

// Defining the props for a price component
export type PriceComponentProps = {
    price: Price;
    productId: string;
    quantityInStock: number;
}

// Defining the props for the product-features component
export type ProductFeaturesProps = {
    features: string[]
}

// Defining the props for the responsive product-featured-images component
export type ProductFeaturedImagesComponentProps = {
    className?: string;
    containerClassName?: string;
    featuredImages: SetOfFeaturedImages;
}

// Defining the props for the suggested-products-card component
export type SuggestedProductCardProps = {
    products: Product[];
}


// Defining a lightweight cart-item for cookie storage
export type ServerCartItem = {
    productId: string;
    quantity: number;
};

// Defining an object of server-cart items
export type ServerCart = {
    items: ServerCartItem[];
};

// Defining a cart-item with product details for display in the cart modal
export type CartItem = {
    productId: string
    quantity: number
    product: {
      name: string
      price: Price
      image: string
      numberInStock: number;
    }
}

// Defining a cart object with items and formatted total price for display in the cart modal
export type CartObject = {
    items: CartItem[];
    shipping: Price;
    totalPrice: Price;
    totalVAT: Price;
    grandTotal: Price;
}

// Defining the cart object for cart-parsing helper function
export type Cart = ServerCart | CartObject;

// Defining the form data type for the checkout form
export type FormData = {
    name: string
    email: string
    phone: string
    address: string
    zip: string
    city: string
    country: string
    payment: string
}

// Defining the props for the checkout-form input components
export type InputFieldProps = {
  id: keyof FormData
  label: string
  type?: string
  placeholder?: string
}

// Defining the props for the radio-input components
export type RadioOptions = {
  id: string
  label: string
  value: string
}

// Defining the props for an invalid cart returned from the valiate-cart function
export type InvalidCartResult = {
  valid: false
  message: string
}

// Defining the props for an valid cart returned from the valiate-cart function
export type ValidCartResult = {
  valid: true
  cart: CartObject
}

// Defining the possible values returned from the valiate-cart function
export type ValidateCartResult = InvalidCartResult | ValidCartResult