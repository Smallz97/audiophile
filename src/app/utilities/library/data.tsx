import { pageCategories } from "./functions";
import { ProductsCategory } from "./definitions"
import { getProductsOfCategory, getCategoryImages } from "./functions";

const categoryMap = Object.fromEntries(pageCategories.map((category) => [category.slug, category]));

export const productCategories: ProductsCategory[] = Object.values(categoryMap).map((category) => ({
    category: category.slug,
    products: getProductsOfCategory(category.slug),
    categoryImage: getCategoryImages(category.slug),
}));