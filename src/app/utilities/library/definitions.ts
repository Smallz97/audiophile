import { StaticImageData } from "next/image";

// Defining the props type for the header component
export type HeaderProps = {
    title?: string;
};

// Defining the props type for the category of products page
export type CategoryOfProductsPageProps = {
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
    image: StaticImageData;
    newProduct?: boolean;
}

// Defining a category of products object type
export type CategoryOfProducts = {
    category: string;
    products: Product[];
    categoryImage: StaticImageData;
}

// Defining the props type for the product-list component
export type ProductsListProps = {
    products: Product[];
}

// Defining the props type for the categories-list component
export type CategoriesListProps = {
    categories: CategoryOfProducts[];
}