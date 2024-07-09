import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import DesktopCheckout from '@/components/checkoutPage/DesktopCheckout';
import MobileCheckout from '@/components/checkoutPage/MobileCheckout';

const CheckoutPage = () => {
  return (
    <>
      <div className="block lg:hidden">
        <MobileCheckout />
      </div>

      <MaxWidthWrapper className="bg-backgrounds-light hidden lg:block">
        <DesktopCheckout/>
      </MaxWidthWrapper>
    </>
  )
}

export default CheckoutPage