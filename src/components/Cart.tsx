'use client'

import { ShoppingCart } from "lucide-react";
import { useCart } from "./providers/CartProvider";
import { cn } from "@/lib/utils";

const CartIcon = ({ isActive }: { isActive: boolean }) => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <ShoppingCart
        className={cn("h-6 w-6 hover:text-green-primary-normal", {
          "text-green-primary-normal": isActive,
        })}
      />
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-green-primary-normal rounded-full">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
