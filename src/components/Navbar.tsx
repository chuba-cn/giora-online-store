import DesktopNav from "./DesktopNav";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <MaxWidthWrapper className="py-6 lg:py-10 bg-green-primary-light ">
      {/* Desktop Navbar */}
      <div className="hidden lg:block relative">
        <DesktopNav />
      </div>

      {/* Mobile and Tablet Navbar */}
      <div className="block lg:hidden relative w-full">
        <MobileNav />
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;