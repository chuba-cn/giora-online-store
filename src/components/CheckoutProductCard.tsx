'use client'

import { CartItem } from "@/constants";
import { useState } from "react";
import { ChevronDown, MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const CheckoutProductCard = ({
    title,
    tag,
    price,
    imgUrl,
    color,
    size,
    qty,
}: CartItem) => {

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
        <p className="font-nunito font-bold text-texts-normal text-[1rem] lg:text-[1.25rem]">{title}</p>
        {
          tag && (
            <p className="font-nunito font-bold text-brown-1 text-[0.75rem] lg:text-[1.25rem]">{tag}</p>
          )
        }
        <p className="font-nunito font-bold text-texts-normal text-[1rem] lg:text-[1.25rem]">{price}</p>
        <div className="flex gap-1 text-xs lg:text-sm">
          <p className="font-nunitosans text-texts-normal">{color}</p>
          <p className="text-gray-400">|</p>
          <p className="font-nunitosans  text-texts-normal text-nowrap">{size}</p>
          <ChevronDown className="cursor-pointer h-5 w5 text-texts-normal"/>
          <p className="text-gray-400">|</p>
          <p className="font-nunitosans text-texts-normal">Qty</p>
          <MinusCircle className="cursor-pointer h-5 w-5 text-texts-normal"/>
          <p className="font-nunitosans text-texts-normal">{qty}</p>
          <PlusCircle className="cursor-pointer h-5 w-5 text-texts-normal"/>
        </div>
        <Button className="p-4 font-nunitosans text-[1rem] bg-transparent border border-[#A20E0E] hover:bg-[#A20E0E] hover:text-white max-w-min transition-all">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CheckoutProductCard;