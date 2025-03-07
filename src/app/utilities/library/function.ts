import { categories } from "./data"

export function getCategoryBySlug(slug: string) {
    return categories.find(category => category.slug === slug);
}

