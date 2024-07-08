import React from "react";
import CheckoutProductCard from "./CheckoutProductCard";
import { cartItem } from "@/constants";

const CheckoutCardList = () => {
  return (
    <div className="flex flex-col gap-6">
      {cartItem.map((item) => (
        <CheckoutProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CheckoutCardList;