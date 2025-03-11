import { categories } from "./functions";
import { CategoryOfProducts } from "./definitions"
import { getProductsOfCategory, getCategoryImages } from "./functions";

const categoryMap = Object.fromEntries(categories.map((category) => [category.slug, category]));

export const products: CategoryOfProducts[] = Object.values(categoryMap).map((category) => ({
    category: category.slug,
    products: getProductsOfCategory(category.slug),
    categoryImage: getCategoryImages(category.slug),
}));