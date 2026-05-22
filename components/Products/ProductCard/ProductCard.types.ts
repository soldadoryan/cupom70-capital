import { ProductType } from "../Products.type";

export type ProductPropType = ProductType & {
  stock?: number;
  imgUrl?: string;
  description?: string;
  details?: string;
  stockLabel?: string;
};

export type ProductCardPropsType = {
  product: ProductPropType;
};
