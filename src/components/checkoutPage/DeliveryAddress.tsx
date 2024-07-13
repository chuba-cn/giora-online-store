import { Input } from '../ui/input';

const DeliveryAddress = () => {
  return (
    <div>
        <p className=' font-bold font-nunito text-[1.25rem] text-texts-normal lg:text[1rem] mb-4'>Delivery address</p>
        <div className='flex flex-col w-full lg:gap-6 gap-4'>
            <div className='flex flex-col lg:flex-row lg:gap-5 gap-4'>
                <Input type='text' placeholder='First Name' className='font-nunitosans text-[1rem]' required/>
                <Input type='text' placeholder='Last Name' className='font-nunitosans text-[1rem]' required/>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-5 gap-4'>
                <Input type='text' placeholder='Phone Number' className='font-nunitosans text-[1rem]' required/>
                <Input type='email' placeholder='Email Address' className='font-nunitosans text-[1rem]' required/>
            </div>
            <Input type='text' placeholder='Home Address' className='font-nunitosans text-[1rem]' required/>
            <div className='flex flex-col lg:flex-row lg:gap-5 gap-4'>
                <Input type='text' placeholder='City' className='font-nunitosans text-[1rem]' required/>
                <Input type='text' placeholder='Country' className='font-nunitosans text-[1rem]' required/>
            </div>
        </div>
    </div>
  )
}

export default DeliveryAddress