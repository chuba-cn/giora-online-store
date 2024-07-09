import { ChevronLeft } from 'lucide-react'

const MobileSubNav = () => {
  return (
    <div className="flex items-center justify-start gap-2 pb-6">
        <ChevronLeft className="h-6 w-6 text-backgrounds-hover" />
        <p className="font-bold font-nunito text-[1rem] text-texts-normal">Checkout</p>
    </div>
  )
}

export default MobileSubNav