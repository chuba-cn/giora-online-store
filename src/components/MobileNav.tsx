import Link from "next/link"
import SearchInput from "./SearchInput"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { arrowRight } from "../../public/assets";

const MobileNav = () => {
  return (
    <div>
      <nav className='flex items-center justify-between w-full'>
        <Link href='/'>
          <p className="jokerman-font text-sm sm:text-3xl hover:text-green-primary-normal transition-colors">Giora</p>
        </Link>

        <div>
          <SearchInput />
        </div>

        <div className="flex items-center justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon">
                <MenuIcon className="h-6 w-6 text-texts-normal hover:text-green-primary-normal transition-colors"/>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-none bg-backgrounds-light w-[360px]">
              <div className="flex flex-col justify-between overflow-y-auto px-2 py-8 space-y-7">
                <SheetClose asChild>
                  <Link href="/">
                    <p className="jokerman-font text-2xl  hover:text-green-primary-normal transition-colors">Giora</p>
                  </Link>
                </SheetClose>

                <div className="flex flex-col space-y-4">
                  <SheetClose>
                    <div className="flex items-center justify-between w-full">
                      <p className="font-nunito text-xl hover:text-green-primary-normal transition-colors">Men</p>
                      <div className="flex items-center justify-center">
                        <Image
                          src={arrowRight}
                          alt="arrow right icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </SheetClose>
                  <SheetClose>
                    <div className="flex items-center justify-between w-full">
                      <p className="font-nunito text-xl hover:text-green-primary-normal transition-colors">Women</p>
                      <div className="flex items-center justify-center">
                        <Image
                          src={arrowRight}
                          alt="arrow right icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </SheetClose>
                  <SheetClose>
                    <div className="flex items-center justify-between w-full">
                      <p className="font-nunito text-xl hover:text-green-primary-normal transition-colors">Unisex</p>
                      <div className="flex items-center justify-center">
                        <Image
                          src={arrowRight}
                          alt="arrow right icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </SheetClose>
                  <SheetClose>
                    <div className="flex items-center justify-between w-full">
                      <p className="font-nunito text-xl hover:text-green-primary-normal transition-colors">Kids</p>
                      <div className="flex items-center justify-center">
                        <Image
                          src={arrowRight}
                          alt="arrow right icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </SheetClose>
                </div>

                <div className="flex flex-col space-y-5 justify-center items-start">
                  <SheetClose>
                    <p className="font-nunito text-lg hover:text-green-primary-normal transition-colors">Favorites</p>
                  </SheetClose>
                  <SheetClose>
                    <p className="font-nunito text-lg hover:text-green-primary-normal transition-colors">Sign In</p>
                  </SheetClose>
                  <SheetClose>
                    <p className="font-nunito text-lg hover:text-green-primary-normal transition-colors">Sign Up</p>
                  </SheetClose>
                  <SheetClose>
                    <Link href="/cart" className="font-nunito text-lg hover:text-green-primary-normal transition-colors">My Cart</Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}

export default MobileNav;
