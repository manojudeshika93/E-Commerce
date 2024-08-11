import { GroupedCategory, Product } from '@/models';
import { groupByCategory } from '../products.helpers';

describe('groupByCategory', () => {
  const mockProductList: Product[] = [
    {
      brand: 22915,
      brand_info: { title: "Totter & Tumble", __typename: "BrandInfo" },
      categories: [
        { name: "Bedroom", __typename: "CategoryTree" },
        { name: "Toys", __typename: "CategoryTree" },
      ],
      id: 261480,
      is_yalla: ["AE"],
      low_stock_qty: null,
      name: "Totter & Tumble - The Rambler Playmat",
      price: {
        regularPrice: {
          amount: { currency: "AED", value: 946.627501, __typename: "Money" },
          __typename: "Price",
        },
        __typename: "ProductPrices",
      },
      price_range: {
        minimum_price: {
          discount: { amount_off: 63.14, percent_off: 6.67, __typename: "ProductDiscount" },
          final_price: { currency: "AED", value: 883.491001, __typename: "Money" },
          regular_price: { currency: "AED", value: 946.627501, __typename: "Money" },
          __typename: "ProductPrice",
        },
        __typename: "PriceRange",
      },
      base_price_range: {
        minimum_price: {
          final_price: { currency: "AED", value: 883.49, __typename: "Money" },
          regular_price: { currency: "AED", value: 946.63, __typename: "Money" },
          __typename: "ProductPrice",
        },
        __typename: "PriceRange",
      },
      usd_price_range: {
        minimum_price: {
          final_price: { currency: "USD", value: 240.57, __typename: "Money" },
          __typename: "ProductPrice",
        },
        __typename: "PriceRange",
      },
      product_label: {
        active_from: "",
        active_to: "",
        background_color: "",
        label_id: null,
        label_text: "",
        name: "",
        text_color: "",
        __typename: "ProductLabel",
      },
      sku: "PGT-STD_RAMBLER-GLOBET",
      small_image: {
        url: "https://www.mumzworld.com/media/catalog/product/cache/8bf0fdee44d330ce9e3c910273b66bb2/p/g/pgt-std_rambler-globet-totter-tumble-the-rambler-playmat-1644490214.jpg",
        __typename: "ProductImage",
      },
      stock_status: "IN_STOCK",
      type_id: "simple",
      uid: "MjYxNDgw",
      url_key: "totter-tumble-the-rambler-playmat",
      url_suffix: "",
      __typename: "SimpleProduct",
    },
    {
      brand: 1351,
      brand_info: { title: "Melissa & Doug", __typename: "BrandInfo" },
      categories: [
        { name: "Toys", __typename: "CategoryTree" },
        { name: "Arts & Crafts", __typename: "CategoryTree" },
      ],
      id: 123456,
      is_yalla: ["AE"],
      low_stock_qty: null,
      name: "Melissa & Doug - Paint Set",
      price: {
        regularPrice: {
          amount: { currency: "AED", value: 50.0, __typename: "Money" },
          __typename: "Price",
        },
        __typename: "ProductPrices",
      },
      price_range: {
        minimum_price: {
          discount: { amount_off: 5.0, percent_off: 10.0, __typename: "ProductDiscount" },
          final_price: { currency: "AED", value: 45.0, __typename: "Money" },
          regular_price: { currency: "AED", value: 50.0, __typename: "Money" },
          __typename: "ProductPrice",
        },
        __typename: "PriceRange",
      },
      base_price_range: {
        minimum_price: {
          final_price: { currency: "AED", value: 45.0, __typename: "Money" },
          regular_price: { currency: "AED", value: 50.0, __typename: "Money" },
          __typename: "ProductPrice",
        },
        __typename: "PriceRange",
      },
      usd_price_range: {
        minimum_price: {
          final_price: { currency: "USD", value: 12.0, __typename: "Money" },
          __typename: "ProductPrice",
        },
        __typename: "PriceRange",
      },
      product_label: {
        active_from: "",
        active_to: "",
        background_color: "",
        label_id: null,
        label_text: "",
        name: "",
        text_color: "",
        __typename: "ProductLabel",
      },
      sku: "MD-PAINT-SET",
      small_image: {
        url: "https://example.com/melissa-doug-paint-set.jpg",
        __typename: "ProductImage",
      },
      stock_status: "IN_STOCK",
      type_id: "simple",
      uid: "MD123456",
      url_key: "melissa-doug-paint-set",
      url_suffix: "",
      __typename: "SimpleProduct",
    }
  ];

  it('should group products by unique categories', () => {
    const expected: GroupedCategory[] = [
      {
        category: "Bedroom",
        data: [[mockProductList[0]]],
      },
      {
        category: "Toys",
        data: [[mockProductList[0], mockProductList[1]]],
      },
      {
        category: "Arts & Crafts",
        data: [[mockProductList[1]]],
      }
    ];

    const result = groupByCategory(mockProductList);
    expect(result).toEqual(expected);
  });

  it('should handle an empty product list', () => {
    const result = groupByCategory([]);
    expect(result).toEqual([]);
  });
});
