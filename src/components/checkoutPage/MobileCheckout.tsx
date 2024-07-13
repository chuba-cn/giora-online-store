"use client"

import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileSubNav from "./MobileSubNav";
import DeliveryOption from "./DeliveryOption";
import DeliveryAddress from "./DeliveryAddress";
import PaymentOptions from "./PaymentOptions";
import { cartItem } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useCart } from "../providers/CartProvider";
import { FormEvent } from 'react';

const MobileCheckout = () => {
  const router = useRouter();
  const { cart } = useCart();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/checkout');
  }

  return (
    <>
      <MaxWidthWrapper className=" bg-green-primary-light">
        <MobileSubNav />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-6">
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-10">
          <DeliveryOption />
        </div>
        <div className="mb-8">
          <div>
            <div className="py-5 rounded-md flex flex-col items-center justify-center gap-8 border-b border-gray-300">
              <div className="p-2 border-b-[3px] border-texts-normal">
                <p className="font-open font-bold text-texts-normal text-[1.5rem]">
                  In Your Cart
                </p>
              </div>

              <div className="flex flex-col justify-between gap-6 w-full">
                <div className="w-full flex justify-between font-nunito font-normal text-[1.25rem] text-texts-normal">
                  <p>Sub-total</p>
                  <p>$160</p>
                </div>
                <div className="w-full flex justify-between font-nunito font-normal text-[1.25rem] text-texts-normal">
                  <p>Shipping</p>
                  <p className="font-nunito">Free</p>
                </div>
                <div className="w-full flex justify-between font-nunito font-normal text-[1.25rem] text-texts-normal">
                  <p>Add Promo Code</p>
                  <p>--</p>
                </div>
                <div className="w-full flex justify-between font-nunito font-bold text-[1.25rem] text-texts-normal">
                  <p>Total</p>
                  <p>$160</p>
                </div>
              </div>
            </div>

            <div className="py-5">
              <div className="flex flex-col gap-8">
                <h1 className=" text-[1rem] lg:text-[1.25rem] font-nunito">
                  Delivery is on Wednesday, 10th July, 2024
                </h1>

                <div className="flex flex-col gap-6">
                  {cart.map((item) => (
                    <div key={item.id}>
                      <div className="flex justify-start gap-6 ">
                        <div className="flex justify-center items-center relative ">
                          <Image
                            src={item.imgUrl}
                            alt="product image"
                            height={158}
                            width={158}
                            className="rounded-md"
                          />
                        </div>

                        {/* Product Detail */}
                        <div className="flex flex-col gap-2">
                          <p className="font-nunito font-bold text-texts-normal text-[1rem] ">
                            {item.name}
                          </p>
                          <p className="font-nunito font-bold text-texts-normal text-[1rem]">
                            {item.price}
                          </p>
                          <div className="flex gap-1 text-xs">
                            <p className="font-nunitosans text-texts-normal">
                              Black
                            </p>
                            <p className="text-gray-400">|</p>
                            <p className="font-nunitosans  text-texts-normal text-nowrap">
                              UK 12
                            </p>
                            <p className="text-gray-400">|</p>
                            <p className="font-nunitosans text-texts-normal">
                              Qty
                            </p>
                            <p className="font-nunitosans text-texts-normal">
                              {item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <DeliveryAddress />
        </div>
        <div className="mb-6">
          <PaymentOptions />
        </div>

        
          <Button 
            className="mx-auto rounded-md bg-green-primary-dark text-backgrounds-light hover:bg-green-primary-normal transition-colors w-full mt-4"
            type="submit"
          >
            Buy Now
          </Button>
      
        </form>
        
      </MaxWidthWrapper>
    </>
  );
};

export default MobileCheckout;
