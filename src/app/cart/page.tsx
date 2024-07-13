"use client"

import DesktopCart from '@/components/DesktopCart';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MobileCart from '@/components/MobileCart';
import ProductsList from '@/components/ProductsList';
import { recommendations } from '@/constants';

const page = () => {

  return (
    <div>
      <div className='hidden lg:block'>
        <DesktopCart /> 
      </div>

      <div className='block lg:hidden'>
        <MobileCart />
      </div>

      <MaxWidthWrapper className='py-8'>
          <p className='font-bold font-sans text-[1.5rem] mb-8'>You Might Also Like</p>
          <ProductsList products={recommendations}/>
      </MaxWidthWrapper>
    </div>
  )
}

export default page