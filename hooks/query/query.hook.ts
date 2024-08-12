import { useQuery } from "@tanstack/react-query";

import { fetchProductDetails, fetchProductList, fetchProductListTest } from "@/services";


export function useProductListTest() {
    return useQuery({
      queryKey: ['product-list-test'],
      queryFn: fetchProductListTest,
    });
  }

  export function useProductList() {
    return useQuery({
      queryKey: ['product-list'],
      queryFn: fetchProductList,
    });
  }

  export function useProductDetails() {
    return useQuery({
      queryKey: ['product-details'],
      queryFn: fetchProductDetails,
    });
  }