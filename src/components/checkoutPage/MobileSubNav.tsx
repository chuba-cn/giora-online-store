"use client"

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MobileSubNav = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-start gap-2 pb-6 cursor-pointer" onClick={() => router.push('/cart')}>
        <ChevronLeft className="h-6 w-6 text-backgrounds-hover" />
        <p className="font-bold font-nunito text-[1rem] text-texts-normal">Cart</p>
    </div>
  )
}

export default MobileSubNav