import { ProductType } from "@/components/Products/Products.type";

export type CartProductType = ProductType & {
  quantity?: number;
};

export type CartContextType = {
  products: CartProductType[];
  setProducts: React.Dispatch<React.SetStateAction<CartProductType[]>>;
  clearProducts: () => void;
};

export type CartProviderPropsType = {
  children: React.ReactNode;
};
