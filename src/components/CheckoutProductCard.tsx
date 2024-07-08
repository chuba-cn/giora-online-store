'use client'

import { CartItem } from "@/constants";
import { useState } from "react";
import { ChevronDown, MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import {HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

const CheckoutProductCard = ({
    title,
    tag,
    price,
    imgUrl,
    color,
    size,
    qty,
}: CartItem) => {

  const [heartIconHover, setHeartIconHover] = useState(false);

  return (
    <div className="py-6 flex justify-start gap-6 border-b border-b-gray-400">
      <div className="flex justify-center items-center relative">
        <Image
          src={imgUrl}
          alt="product image"
          height={228}
          width={224}
        />

        <div className="absolute bottom-2 right-2">
          <button
            className="bg-backgrounds-light p-1 rounded-full text-green-primary-normal border-2 border-green-primary-normal"
            onMouseEnter={() => setHeartIconHover(true)}
            onMouseLeave={() => setHeartIconHover(false)}
          >
            {heartIconHover ? (
              <HeartIconSolid className="h-4 w-4" />
            ) : (
              <HeartIconOutline className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="flex flex-col justify-between gap-2">
        <p className="font-nunito font-bold text-texts-normal text-[1.25rem]">{title}</p>
        {
          tag && (
            <p className="font-nunito font-bold text-brown-1 text-[1.25rem]">{tag}</p>
          )
        }
        <p className="font-nunito font-bold text-texts-normal text-[1.25rem]">{price}</p>
        <div className="flex gap-1 text-sm">
          <p className="font-nunitosans text-texts-normal">{color}</p>
          <p className="text-gray-400">|</p>
          <p className="font-nunitosans  text-texts-normal">{size}</p>
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