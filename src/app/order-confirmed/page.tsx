import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Desktop from "@/components/order-confirmedPage/Desktop"
import Mobile from "@/components/order-confirmedPage/Mobile"

const page = () => {
  return (
    <>
      <div className="block lg:hidden">
        <Mobile />
      </div>

      <MaxWidthWrapper className="bg-backgrounds-light hidden lg:block">
        <Desktop />
      </MaxWidthWrapper>
    </>
  )
}

export default page