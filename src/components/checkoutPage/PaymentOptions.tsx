import { CreditCardIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import paypal from "../../../public/assets/images/PayPalSmall.png";
import Image from "next/image";
import { paymentMethod } from "@/constants";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

const PaymentOptions = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <p className="font-nunito font-bold text-[1.25rem] lg:text-black text-texts-normal">
        Payment
      </p>
      <p className="font-nunito font-bold text-[1rem] lg:text-black text-texts-normal">
        Select Payment Method
      </p>
      <div className="flex gap-4 justify-start w-full">
        <Button className=" text-[1rem] font-nunitosans border border-green-primary-normal rounded-md p-4 bg-green-primary-light hover:bg-white text-green-primary-normal">
          <CreditCardIcon className="h-6 w-6 text-green-primary-normal mr-2" />{" "}
          Delivery
        </Button>
        <Button className=" text-[1rem] border font-nunitosans border-green-primary-normal rounded-md p-4 bg-transparent hover:bg-gray-300 text-green-primary-normal">
          <Image
            src={paypal}
            height={17}
            width={24}
            alt="paypal logo"
            className="mr-2"
          />
          Paypal
        </Button>
      </div>

      <div className="flex flex-col gap-4 place-self-start">
        <p className="font-nunito font-bold text-[1rem] text-texts-normal">
          We Accept:
        </p>
        <div className="flex justify-between gap-2">
          {paymentMethod.map((type, index) => (
            <div key={index} className="cursor-pointer">
              <Image src={type} alt="paymet icons" height={28} width={40} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className=" font-bold font-nunito text-texts-normal text[1rem] mb-4">
          Card Details
        </p>
        <div className="flex flex-col w-full lg:gap-6 gap-4">
          <div className="flex flex-col lg:flex-row lg:gap-5 gap-4">
            <Input
              type="text"
              placeholder="Card Number"
              className="font-nunitosans text-[1rem]"
            />
            <Input
              type="text"
              placeholder="Name On Card"
              className="font-nunitosans text-[1rem]"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-5 gap-4">
            <Input
              type="text"
              placeholder="MM / YY"
              className="font-nunitosans text-[1rem]"
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="font-nunitosans text-[1rem]"
            />
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Checkbox
              className="h-6 w-6 text-green-primary-normal inline border border-green-primary-normal"
              id="save-details"
            />
            <label
              htmlFor="save-details"
              className="text-[1rem] font-nunitosans leading-none "
            >
              Accept terms and conditions
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;