export type ProductType = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  city: string;
  stock?: number;
  tab?: string;
};

export type ProductResponseType = {
  id: string;
  product_name: string;
  stock: number;
  city: string;
};

export type ProductsPropsType = {
  products: ProductType[];
};
