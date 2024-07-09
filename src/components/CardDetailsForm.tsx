"use client"

import { useForm, SubmitHandler } from 'react-hook-form';

interface CardDetailsFormInputs {
  cardNumber: string;
  nameOnCard: string;
  expiry: string;
  cvv: string;
}

const CardDetailsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CardDetailsFormInputs>();

  const onSubmit: SubmitHandler<CardDetailsFormInputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('cardNumber', { required: true })}
        placeholder="Card Number"
        className="border p-2 w-full"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          {...register('nameOnCard', { required: true })}
          placeholder="Name On Card"
          className="border p-2"
        />
        <input
          {...register('expiry', { required: true })}
          placeholder="MM/YY"
          className="border p-2"
        />
      </div>
      <input
        {...register('cvv', { required: true })}
        placeholder="CVV"
        className="border p-2 w-full"
      />
      {Object.keys(errors).length > 0 && <span className="text-red-500">Please fill out all fields correctly</span>}
    </form>
  );
};

export default CardDetailsForm;
