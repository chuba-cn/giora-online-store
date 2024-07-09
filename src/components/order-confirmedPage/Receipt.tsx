import { cartItem } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";

const Receipt = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Product */}
      <div className="py-4 flex flex-col w-full gap-10 lg:flex-row lg:gap-[4.5rem] lg:justify-between border-b border-gray-300">
        {cartItem.map((item) => (
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
                <p className="font-nunito font-bold text-texts-normal text-[1.25rem] ">
                  {item.title}
                </p>
                <div className="flex gap-1 text-[1rem]">
                  <p className="font-nunitosans text-texts-normal">
                    {item.color}
                  </p>
                  <p className="text-gray-400">|</p>
                  <p className="font-nunitosans  text-texts-normal text-nowrap">
                    {item.size}
                  </p>
                  <p className="text-gray-400">|</p>
                  <p className="font-nunitosans text-texts-normal">Qty</p>
                  <p className="font-nunitosans text-texts-normal">
                    {item.qty}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Card Details */}
      <div className="lg:py-4 flex flex-col gap-6 w-full lg:border-b lg:border-gray-300">
        <div className="flex justify-between w-full">
            <p className="font-nunitosans text-[1rem] text-texts-normal">Transaction Date</p>
            <p className="font-nunitosans text-green-primary-normal font-bold text-[1rem]">Thursday, 08 May, 2024</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="font-nunitosans text-[1rem] text-texts-normal">Payment Method</p>
            <p className="font-nunitosans text-green-primary-normal font-bold text-[1rem]">Visa *****1234</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="font-nunitosans text-[1rem] text-texts-normal">Sub-total</p>
            <p className="font-nunitosans text-green-primary-normal font-bold text-[1rem]">$160</p>
        </div>
        <div className="flex justify-between w-full ">
            <p className="font-nunitosans text-[1rem] text-texts-normal">Shipping</p>
            <p className="font-nunitosans text-green-primary-normal font-bold text-[1rem]">Free</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="font-nunito font-bold text-[1.25rem] text-texts-normal">Total</p>
            <p className="font-nunito font-bold text-[1.25rem] text-green-primary-normal ">$160</p>
        </div>
      </div>

      {/* Print Button */}
      <div className="w-full">
        <Button className="py-4 h-full bg-green-primary-normal hover:bg-green-primary-dark text-backgrounds-light text-[1rem] transition-colors w-full">
            Print Receipt
        </Button>
      </div>
    </div>
  );
};

export default Receipt;
