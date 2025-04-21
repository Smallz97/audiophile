import { cache } from "react";
import type { Product } from "@/app/utilities/library/definitions"
import { categoryPages, productData, images, getAllProducts } from "@/app/utilities/library/data"

export function findMatchingCategory(slug: string) {
  return categoryPages.find(category => category.slug === slug);
}

export function getCategoryImages(categorySlug: string) {
  return images[categorySlug];
}

export function getCategoryProducts(categorySlug: string) {
  return productData[categorySlug];
}

export function generateProductId(productType: string, productName: string): string {
  return `${productType}-${productName.toLowerCase().replace(/\s+/g, "-")}`;
}

export const getRandomSuggestedProducts = cache(
  (currentProduct: Product, count: number = 3): Product[] => {
    const allProducts = getAllProducts();
    
    const availableProducts = allProducts.filter(
      product => product.name !== currentProduct.name
    );
    
    availableProducts.sort((a, b) => {
      if (a.productType !== currentProduct.productType && 
        b.productType === currentProduct.productType) return -1;
      if (a.productType === currentProduct.productType && 
        b.productType !== currentProduct.productType) return 1;
      return 0;
    });
    
    if (availableProducts.length <= count) {
      return availableProducts;
    }
    
    const randomProducts: Product[] = [];
    
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * availableProducts.length);
      randomProducts.push(availableProducts[randomIndex]);
      availableProducts.splice(randomIndex, 1);
    }
    
    return randomProducts;
  }
);

export const handleAddToCart = async (productId: string) => {
  await fetch('/api/add-to-cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId }),
  });
};