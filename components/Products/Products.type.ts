export type ProductType = {
  id: string;
  name: string;
  formattedPrice: string;
  price: number;
  city: string;
};

export type ProductsPropsType = {
  products: ProductType[];
};
