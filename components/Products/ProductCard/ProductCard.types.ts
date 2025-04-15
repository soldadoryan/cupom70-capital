import { ProductType } from "../Products.type";

export type ProductPropType = ProductType & { stock?: number; imgUrl?: string };

export type ProductCardPropsType = {
  product: ProductPropType;
};
