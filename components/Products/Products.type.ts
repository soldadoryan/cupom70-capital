export type ProductType = {
  id: string;
  name: string;
  price: number;
  city: string;
  stock?: number;
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
