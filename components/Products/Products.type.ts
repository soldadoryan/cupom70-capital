export type ProductType = {
  id: string;
  name: string;
  price: number;
  city: string;
};

export type ProductsPropsType = {
  products: ProductType[];
};
