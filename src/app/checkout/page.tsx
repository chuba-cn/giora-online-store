import DeliveryOptions from "@/components/DeliveryOptions";
import CartSummary from "@/components/CartSummary";
import DeliveryAddressForm from "@/components/DeliveryAddressForm";
import PaymentMethod from "@/components/PaymentMethod";
import CardDetailsForm from "@/components/CardDetailsForm";
import CheckoutButton from "@/components/CheckOutButton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Prodcut1, Prodcut11 } from "../../../public/assets";
import { StaticImageData } from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: StaticImageData
}

const CheckoutPage = () => {
  const items: CartItem[] = [
    {
      id: 1,
      name: "Gloria Queen Gown",
      price: 70,
      quantity: 1,
      image: Prodcut1,
    },
    {
      id: 2,
      name: "Gloria Zeni Sleeveless",
      price: 90,
      quantity: 2,
      image: Prodcut11
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-8">CheckOut</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <DeliveryOptions />
            <DeliveryAddressForm />
            <PaymentMethod />
            <CardDetailsForm />
          </div>
          <div>
            <CartSummary items={items} />
          </div>
        </div>
        <div className="mt-8">
          <CheckoutButton />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CheckoutPage