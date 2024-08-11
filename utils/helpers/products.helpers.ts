import { Product } from "@/models";

/**
 * Groups products by unique categories.
 *
 * @param {Product[]} productList - The array of product objects to be grouped by categories.
 * @returns {Array<{ category: string, data: Product[][] }>} - An array of objects, each containing a unique category and a nested array of arrays with corresponding products.
 */
export function groupByCategory(productList: Product[]): { category: string, data: Product[][] }[] {
    // Initialize an empty object to map categories to their corresponding products
    const categoryMap: { [key: string]: Product[] } = {};
  
    // Iterate over each product in the productList array
    productList.forEach(product => {
      // For each product, iterate over its categories
      product.categories.forEach(category => {
        // If the category is not already in categoryMap, add it with an empty array
        if (!categoryMap[category.name]) {
          categoryMap[category.name] = [];
        }
        // Push the current product into the array for this category
        categoryMap[category.name].push(product);
      });
    });
  
    // Convert the categoryMap object into an array of objects
    const DATA = Object.keys(categoryMap).map(category => ({
      // Each object has a 'category' name and 'data' as an array containing a single array of products
      category,
      data: [categoryMap[category]],  // Nest the products array inside another array
    }));
  
    // Return the final array of grouped categories and products
    return DATA;
}
