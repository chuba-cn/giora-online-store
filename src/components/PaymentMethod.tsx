"use client"

import { useState } from 'react';

const PaymentMethod = () => {
  const [method, setMethod] = useState<string>('Card');

  return (
    <div className="space-y-2">
      <h2>Select Payment Method</h2>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 ${method === 'Card' ? 'bg-green-500' : 'bg-gray-200'}`}
          onClick={() => setMethod('Card')}
        >
          Debit or Credit Card
        </button>
        <button
          className={`px-4 py-2 ${method === 'PayPal' ? 'bg-green-500' : 'bg-gray-200'}`}
          onClick={() => setMethod('PayPal')}
        >
          PayPal
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
