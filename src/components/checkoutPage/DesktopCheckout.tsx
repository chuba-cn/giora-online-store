"use client"

import { Button } from "../ui/button";
import DeliveryOption from "./DeliveryOption";
import DeliveryAddress from "./DeliveryAddress";
import PaymentOptions from "./PaymentOptions";
import { FormEvent } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../providers/CartProvider";

const DesktopCheckout = () => {

  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/order-confirmed');
  }

  const router = useRouter();

  return (
    <div className="py-14">
      <p className="font-open font-bold text-black text-[2rem] leading-[2.375rem] text-center mb-14">
        Checkout
      </p>
      <div className="grid grid-cols-2 space-x-5 w-full">
        {/* left Side */}
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Delivery Details */}
          <div className=" flex flex-col gap-8 w-full py-4 border-b-2 border-gray-300">
            <DeliveryOption />
            <DeliveryAddress />
          </div>

          {/* Payment Details */}
          <div className="py-4 flex flex-col gap-6 border-b-2 border-gray-300">
            <PaymentOptions />
          </div>

          {/* Submit Form Button */}
          <div className="px-3">
            <Button 
              className="mx-auto rounded-md bg-green-primary-dark text-backgrounds-light hover:bg-green-primary-normal transition-colors w-full mt-4"
              type="submit"
            >
              Buy Now
            </Button>
          </div>
        </form>

        {/* Right Side */}
        <div>
          <div className="bg-[#F1F1F1] py-5 px-8 rounded-md flex flex-col items-center justify-center gap-8 border-b border-gray-300">
            <div className="p-2 border-b-[3px] border-texts-normal">
              <p className="font-open font-bold text-texts-normal text-[1.5rem]">
                In Your Cart
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 w-full">
              <div className="w-full flex justify-between font-nunito font-normal text-[1.25rem] text-texts-normal">
                <p>Sub-total</p>
                <p>${totalPrice}</p>
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
                <p>${totalPrice}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F1F1F1] py-5 px-8">
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
                        <p className="font-nunito font-bold text-texts-normal text-[1rem] lg:text-[1.25rem]">
                          {item.name}
                        </p>
                        <p className="font-nunito font-bold text-texts-normal text-[1rem] lg:text-[1.25rem]">
                          ${item.price}
                        </p>
                        <div className="flex gap-1 text-xs lg:text-sm">
                          <p className="font-nunitosans text-texts-normal">
                            black
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
    </div>
  );
};

export default DesktopCheckout;
