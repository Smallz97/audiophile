import { StaticImageData } from "next/image";

// Defining the props type for the header component
export type HeaderProps = {
    title?: string;
};

// Defining the props type for a button component
export type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

// Defining the props type for a products category page
export type ProductsCategroyPageProps = {
    slug: string;
    name: string;
    description: string;
    metaDescription: string;
    keywords: string[];
};

// Defining a product object type
export type Product = {
    name: string;
    productType: string;
    description: string;
    newProduct?: boolean;
    image: StaticImageData;
    features: string[];
    boxContent: BoxContents[];
}

// Defining a products category object type
export type ProductsCategory = {
    category: string;
    products: Product[];
    categoryImage: StaticImageData;
}

// Defining the props type for the product-list component
export type ProductsListProps = {
    productsList: Product[];
}

// Defining the props type for the product-details component
export type ProductDetailsProps = {
    product: Product;
}

// Defining the props type for the categories-list component
export type CategoriesListProps = {
    categories: ProductsCategory[];
}

// Defining the props type for the counter button component
export type CounterProps = {
    initialValue?: number;
    min?: number;
    max?: number;
};

// Defining the props type for the in the box component
export type BoxContents = {
    quantity: number;
    item: string;
}