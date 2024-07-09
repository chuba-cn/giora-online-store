import Receipt from "./Receipt";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileSubNav from "../checkoutPage/MobileSubNav";
import MessageSuccess from "./MessageSuccess";

const Mobile = () => {
  return (
    <>
      <MaxWidthWrapper className=" bg-green-primary-light">
        <MobileSubNav />
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-8">
        <div className="flex flex-col gap-10">
          <MessageSuccess />
          <Receipt />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Mobile;
