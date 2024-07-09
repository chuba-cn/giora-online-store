import { CheckCircleIcon } from '@heroicons/react/16/solid';

const MessageSuccess = () => {
  return (
    <div className='flex flex-col gap-14'>
        <CheckCircleIcon className='w-[200px] h-[200px] text-[#4BB543] mx-auto'/>
        <div className='flex flex-col gap-6 w-full text-center'>
            <p className='font-open lg:text-[2rem] font-bold text-[1.5rem] text-texts-normal'>Payment Successful!</p>
            <p className='text-[1rem] font-nunitosans lg:text-[1.25rem]'>Congratulations. Your payment was completed successfully</p>
        </div>
    </div>
  )
}

export default MessageSuccess