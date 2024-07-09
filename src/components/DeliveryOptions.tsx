'use client'

import { useState } from 'react';

const DeliveryOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Delivery');

  return (
    <div className="flex space-x-4">
      <button
        className={`px-4 py-2 ${selectedOption === 'Delivery' ? 'bg-green-500' : 'bg-gray-200'}`}
        onClick={() => setSelectedOption('Delivery')}
      >
        Delivery
      </button>
      <button
        className={`px-4 py-2 ${selectedOption === 'In-Store Pickup' ? 'bg-green-500' : 'bg-gray-200'}`}
        onClick={() => setSelectedOption('In-Store Pickup')}
      >
        In-Store Pickup
      </button>
    </div>
  );
};

export default DeliveryOptions;