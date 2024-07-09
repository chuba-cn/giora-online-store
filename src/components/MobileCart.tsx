"use client"

import { paypal } from "../../public/assets";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Image from "next/image";
import CheckoutCardList from "./CheckoutCardList";
import { paymentMethod } from "@/constants";
import { useRouter } from "next/navigation";

const MobileCart = () => {

  const router = useRouter();

  return (
    <MaxWidthWrapper className="py-6">
      <div className="grid grid-cols-1 space-y-8 w-full">
        {/* Cart details */}
        <div className="flex flex-col gap-4">
          {/* Cart info */}
          <div className="flex justify-between gap-6 w-full">
            <div className="flex flex-col items-start justify-between gap-1">
              <p className="font-sans font-bold text-[1.25rem] text-black">
                My Cart
              </p>
              <p className="font-nunito text-texts-normal text-[1rem] font-normal">
                Subtotal $160
              </p>
            </div>
            <div className="flex flex-col items-start justify-between gap-1">
              <p className="font-nunito font-bold text-texts-normal text-[0.75rem]">
                Shopping Bag
              </p>
              <p className="font-nunitosans text-black text-[0.75rem] font-normal">
                2 Items
              </p>
            </div>
          </div>

          {/* Cart details */}
          <div>
            <CheckoutCardList />
          </div>
        </div>

        {/* checkout summary */}
        <div>
          <div className="py-5 rounded-md flex flex-col items-center justify-center gap-8">
            <div className="p-2 border-b-[3px] border-texts-normal">
              <p className="font-sans font-bold text-texts-normal text-[1.25rem]">
                Cart Summary
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 w-full">
              <div className="w-full flex justify-between font-nunito font-normal text-[0.75rem] text-texts-normal">
                <p>Sub-total</p>
                <p>$160</p>
              </div>
              <div className="w-full flex justify-between font-nunito font-normal text-[0.75rem] text-texts-normal">
                <p>Shipping</p>
                <p className="font-nunito">Free</p>
              </div>
              <div className="w-full flex justify-between font-nunito font-normal text-[0.75rem] text-texts-normal">
                <p>Add Promo Code</p>
                <p>$160</p>
              </div>
              <div className="w-full flex justify-between font-nunito font-bold text-[0.75rem] text-texts-normal">
                <p>Total</p>
                <p>$160</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-between w-full">
              <Button
                className="p-4 border border-green-primary-normal bg-green-primary-normal text-backgrounds-light hover:bg-green-primary-dark transition-all"
                onClick={() => router.push("/checkout")}
              >
                Check Out
              </Button>
              <Button 
                className="p-4 bg-backgrounds-light border border-green-primary-normal hover:bg-gray-300 transition-all"
                onClick={() => router.push("/checkout")}
              >
                <Image src={paypal} alt="paypal logo" />
              </Button>
            </div>

            <div className="flex flex-col gap-4 place-self-start">
              <p className="font-nunito font-bold text-[1rem] text-texts-normal">
                Secure Payments:
              </p>
              <div className="flex justify-between gap-2">
                {paymentMethod.map((type, index) => (
                  <div key={index} className="cursor-pointer">
                    <Image
                      src={type}
                      alt="paymet icons"
                      height={28}
                      width={40}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default MobileCart;