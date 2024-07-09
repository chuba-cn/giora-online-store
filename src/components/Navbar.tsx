"use client"

import { useEffect, useRef, useState } from "react";
import DesktopNav from "./DesktopNav";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MaxWidthWrapper className={`py-6 lg:py-10 bg-green-primary-light fixed top-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
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