"use client"

import { useRouter } from 'next/navigation';

const CheckoutButton = () => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/order-confirmation');
  };

  return (
    <button
      className="px-4 py-2 bg-green-500 text-white rounded-lg w-full"
      onClick={handleCheckout}
    >
      Buy Now
    </button>
  );
};

export default CheckoutButton;