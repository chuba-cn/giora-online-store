"use client"
import { useForm, SubmitHandler } from 'react-hook-form';

interface DeliveryAddressFormInputs {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

const DeliveryAddressForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<DeliveryAddressFormInputs>();

  const onSubmit: SubmitHandler<DeliveryAddressFormInputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          {...register('firstName', { required: true })}
          placeholder="First Name"
          className="border p-2"
        />
        <input
          {...register('lastName', { required: true })}
          placeholder="Last Name"
          className="border p-2"
        />
      </div>
      <input
        {...register('phoneNumber', { required: true })}
        placeholder="Phone Number"
        className="border p-2 w-full"
      />
      <input
        {...register('email', { required: true })}
        placeholder="Email Address"
        className="border p-2 w-full"
      />
      <input
        {...register('address', { required: true })}
        placeholder="Home Address"
        className="border p-2 w-full"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          {...register('city', { required: true })}
          placeholder="City"
          className="border p-2"
        />
        <input
          {...register('country', { required: true })}
          placeholder="Country"
          className="border p-2"
        />
      </div>
      {Object.keys(errors).length > 0 && <span className="text-red-500">Please fill out all fields correctly</span>}
    </form>
  );
};

export default DeliveryAddressForm;
