interface BrandInfo {
  title: string;
  __typename: string;
}

interface CategoryTree {
  name: string;
  __typename: string;
}

interface Money {
  currency: string;
  value: number;
  __typename: string;
}

interface Price {
  amount: Money;
  __typename: string;
}

interface RegularPrice {
  regularPrice: {
    amount: Money;
    __typename: string;
  };
  __typename: string;
};

interface ProductDiscount {
  amount_off: number;
  percent_off: number;
  __typename: string;
}

interface ProductPrice {
  discount?: ProductDiscount;
  final_price: Money;
  regular_price?: Money;
  __typename: string;
}

interface UsdProductPrice {
  discount?: ProductDiscount;
  final_price: Money;
  __typename: string;
}

interface PriceRange {
  minimum_price: ProductPrice;
  __typename: string;
}

interface UsdPriceRange {
  minimum_price: UsdProductPrice;
  __typename: string;
}

interface DetailBrandInfo {
  img_src: string;
  title: string;
  url: string;
  __typename: string;
};

interface Breadcrumb {
  category_id: number;
  category_name: string;
  category_url_key: string;
  category_url_path: string;
  __typename: string;
};

interface CategoryBreadcrumbs {
  breadcrumbs?: Breadcrumb[] | null;
  level: number;
  id: number;
  name: string;
  url_path: string;
  url_key: string;
  __typename: string;
};

interface ProductLabel {
  active_from: string;
  active_to: string;
  background_color: string;
  label_id: number | null;
  label_text: string;
  name: string;
  text_color: string;
  __typename: string;
}

interface ProductImage {
  url: string;
  __typename: string;
}

interface CrossBorderProduct {
  is_allowed: boolean;
  disallow_countries: string;
  __typename: string;
};

interface ComplexTextValue {
  html: string;
  __typename: string;
};

interface ProductDetailImage {
  disabled: boolean;
  label?: string | null;
  position: number;
  url: string;
  __typename: string;
};

interface MediaGalleryEntry {
  disabled: boolean;
  file: string;
  id: number;
  label?: string | null;
  position: number;
  uid: string;
  __typename: string;
};

interface SearchResultPageInfo {
  page_size?: number;
  total_pages: number;
  __typename: string;
};

interface ProductReviews {
  items: unknown[]; 
  page_info: SearchResultPageInfo;
  __typename: string;
};

export  interface Product {
  brand: number;
  brand_info: BrandInfo;
  categories: CategoryTree[];
  id: number;
  is_yalla: string[];
  low_stock_qty: number | null;
  name: string;
  price: {
    regularPrice: Price;
    __typename: string;
  };
  price_range: PriceRange;
  base_price_range: PriceRange;
  usd_price_range: UsdPriceRange;
  product_label: ProductLabel;
  sku: string;
  small_image: ProductImage;
  stock_status: string;
  type_id: string;
  uid: string;
  url_key: string;
  url_suffix: string;
  __typename: string;
}

export interface ProductDetails {
  language: string;
  redirect_code: number;
  relative_url: string;
  type: string;
  amrma_default_resolution_period: number;
  brand: number;
  brand_info: DetailBrandInfo;
  categories: CategoryBreadcrumbs[];
  cautions: string;
  cross_border_product: CrossBorderProduct;
  description: ComplexTextValue;
  dimensions: string;
  features: string;
  id: number;
  is_yalla: any[];
  media_gallery: ProductDetailImage[];
  media_gallery_entries: MediaGalleryEntry[];
  meta_description: string;
  meta_title: string;
  name: string;
  pkgdimensions: string;
  price: RegularPrice;
  price_range: PriceRange;
  base_price_range: PriceRange;
  usd_price_range: PriceRange;
  product_label: ProductLabel;
  rating_summary: number;
  recom_age: string;
  review_count: number;
  reviews: ProductReviews;
  shipping_weight?: number | null;
  sku: string;
  small_image: ProductImage;
  stock_status: string;
  uid: string;
  url_key: string;
  weight: number;
  __typename: string;
  options?: unknown; 
};

export interface GroupedCategory {
  category: string;
  data: Product[][];
};

export interface ProductsResponse {
  products: {
    items: Product[];
    page_info: SearchResultPageInfo;
    total_count: number;
    yalla_total_count: number;
    __typename: string;
  }
};

export interface ProductDetailsResponse {
  product: ProductDetails[];
}
