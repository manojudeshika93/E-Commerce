
import { HTTP_METHOD } from '@/constants';

import { createHttpClient } from '../http';


// Fetch Product List Test
export const fetchProductListTest = () => {
  return createHttpClient({url: '/product-list-lite', method: HTTP_METHOD.GET});
};

// Fetch Product List
export const fetchProductList = async () => {
  return createHttpClient({url: '/product-list-large', method: HTTP_METHOD.GET});
};

// Fetch Product Details
export const fetchProductDetails = async () => {
  return createHttpClient({url: '/product', method: HTTP_METHOD.GET});
};
