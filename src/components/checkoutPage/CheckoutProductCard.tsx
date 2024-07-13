'use client'

import { useCart } from "../providers/CartProvider";
import { ChevronDown, MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const CheckoutProductCard = ({
  id,
  name,
  price,
  quantity,
  imgUrl
}: {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string
}) => {

  const { cart, dispatch } = useCart();
  const { toast } = useToast();

  const handleIncrease = (id: string) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
  };

  const handleDecrease = (id: string, quantity: number) => {
    if (quantity > 1) {
      dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
    } else {
      toast({
        title: "Quantity cannot be less than 1",
        className: "bg-white text-[1.25rem] font-bold font-nunito",
      });
    }
  };

  const handleRemove = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return (
    <div className="py-6 flex justify-start gap-6 border-b border-b-gray-400">
      <div className="flex justify-center items-center relative ">
        <Image
          src={imgUrl}
          alt="product image"
          height={228}
          width={224}
        />
      </div>

      {/* Product Detail */}
      <div className="flex flex-col gap-3">
        <p className="font-nunito font-bold text-texts-normal text-[1rem] lg:text-[1.25rem]">{name}</p>
        <p className="font-nunito font-bold text-texts-normal text-[1rem] lg:text-[1.25rem]">${price}</p>
        <div className="flex gap-1 text-xs lg:text-sm">
          <p className="font-nunitosans text-texts-normal">Black</p>
          <p className="text-gray-400">|</p>
          <p className="font-nunitosans  text-texts-normal text-nowrap">UK 12</p>
          <ChevronDown className="cursor-pointer h-5 w5 text-texts-normal"/>
          <p className="text-gray-400 poin">|</p>
          <p className="font-nunitosans text-texts-normal">Qty</p>
          <MinusCircle className="cursor-pointer h-5 w-5 text-texts-normal" onClick={() => handleDecrease(id, quantity)}/>
          <p className="font-nunitosans text-texts-normal">{quantity}</p>
          <PlusCircle className="cursor-pointer h-5 w-5 text-texts-normal" onClick={() => handleIncrease(id) }/>
        </div>
        <Button 
          className="p-4 font-nunitosans text-[1rem] bg-transparent border border-[#A20E0E] hover:bg-[#A20E0E] hover:text-white max-w-min transition-all"
          onClick={() => handleRemove(id)}
          >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CheckoutProductCard;