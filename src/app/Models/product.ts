export interface Product {
  name: string;
  link: string;
  output: string;
  current_price: number;
  original_price: number;
  discounted: boolean;
  thumbnail: string;
  query_url: string;
  data: {
    name: string;
    current_price: number;
    original_price: number;
    discounted: boolean;
    discount_percent: number;
    rating: number;
    in_stock: boolean;
    f_assured: boolean;
    share_url: string;
    seller: {
      seller_name: string;
      seller_rating: number;
    };
    thumbnails:string[];
    highlights: never[];
    product_id: string;
    offers: string[];
    specs: never[];
  };
  id: number;
  category: string;
}
