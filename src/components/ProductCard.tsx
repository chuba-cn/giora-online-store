"use client";

import { Color } from "@/hooks/usePaginatedProducts";
import { HeartIcon as HeartIconSolid, ShoppingCartIcon as ShoppingCartIconSolid } from "@heroicons/react/16/solid";
import {HeartIcon as HeartIconOutline, ShoppingCartIcon as ShoppingCartIconOutline } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./providers/CartProvider";
import { useToast } from "./ui/use-toast";

const ProductCard = ({
  id,
  title,
  description,
  price,
  imgUrl,
  imgUrlTwo,
  colors,
}: {
  id: string,
  title: string,
  description: string | null,
  price: number,
  imgUrl: string,
  imgUrlTwo: string,
  colors: Color[] | string[]
}) => {
  const [hover, setHover] = useState(false);
  const [heartIconHover, setHeartIconHover] = useState(false);
  const [cartIconHover, setCartIconHover] = useState(false);
  const { dispatch } = useCart();
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-4 items-start justify-start">
      <div
        className="flex justify-center items-center relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src={hover ? imgUrlTwo : imgUrl}
          alt="product image"
          width={348}
          height={348}
          className="rounded-md object-cover"
        />

        <div className="absolute bottom-2 right-2">
          <button
            className="bg-backgrounds-light p-1 rounded-full text-green-primary-normal border-2 border-green-primary-normal"
            onMouseEnter={() => setHeartIconHover(true)}
            onMouseLeave={() => setHeartIconHover(false)}
          >
            {heartIconHover ? (
              <HeartIconSolid className="h-4 w-4 lg:h-6 lg:w-6" />
            ) : (
              <HeartIconOutline className="h-4 w-4 lg:h-6 lg:w-6" />
            )}
          </button>
        </div>

        <div className="absolute bottom-2 left-2">
          <button
            className=" text-green-primary-normal bg-backgrounds-light p-1 rounded-full "
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: { id: id, name: title, price: price, quantity: 1, imgUrl: imgUrl}})
              toast({
                title: "Added to cart",
                description: "Product added succesfully",
                className: "bg-white text-[1.25rem] font-bold font-nunito"
              })
            }}
            onMouseEnter={() => setCartIconHover(true)}
            onMouseLeave={() => setCartIconHover(false)}
          >
            {cartIconHover ? (
              <ShoppingCartIconSolid className="h-4 w-4 lg:h-6 lg:w-6" />
            ) : (
              <ShoppingCartIconOutline className="h-4 w-4 lg:h-6 lg:w-6" />
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-2">
        <Link
          href={`/products/${id}`}
        >
          <p className="font-nunito font-bold lg:text-[1.25rem] text-texts-dark hover:text-green-primary-dark">
            {title}
          </p>
        </Link>
        <p className="font-nunito text-[0.75rem] lg:text-[1rem] font-bold text-backgrounds-darker">
          {description}
        </p>
        <div className="flex flex-row gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="lg:h-5 lg:w-5 h-4 w-4 rounded-full cursor-pointer"
              style={{ backgroundColor: `${color}` }}
            ></div>
          ))}
        </div>
        <p className="font-nunito font-bold lg:text-[1.25rem] text-texts-dark">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;