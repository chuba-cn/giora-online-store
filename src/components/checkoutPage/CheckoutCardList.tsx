'use client'

import { useCart } from "../providers/CartProvider";
import CheckoutProductCard from "./CheckoutProductCard";

const CheckoutCardList = ({ totalProducts }: { totalProducts: number}) => {
  const { cart, dispatch } = useCart();

  return (
    <div className="flex flex-col gap-6">
      {cart.map((item) => (
        <CheckoutProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CheckoutCardList;