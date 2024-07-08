"use client"

import {  navigation } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();
  const isActive = pathname === "/cart" || pathname.startsWith("/cart");

  return (
    <nav className="flex flex-row items-center justify-between">
      <Link href='/' className="basis-auto">
        <p className="jokerman-font text-3xl hover:text-green-primary-normal transition-colors">Giora</p>
      </Link>
      <div className="w-full flex items-center justify-between font-nunito text-xl basis-3/4 space-x-3 lg" >
        <div className="flex flex-row items-center justify-between space-x-6">
          {navigation.map((item) => (
            <div key={item.id}>
              <Link
                href={item.url}
                className={cn(
                  "text-texts-normal text-xl hover:text-green-primary-normal hover:border-b-[3px] hover: border-b-green-primary-normal transition-colors",
                  item.id === 1 &&
                    "border-b-[3px] text-green-primary-normal border-b-green-primary-normal font-bold "
                )}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <SearchInput />
        </div>
        <div className="flex items-center justify-between space-x-3">
          <Link href="#">
          <Heart className="h-6 w-6 hover:text-green-primary-normal"/>
          </Link>
          <Link href="#">
            <UserRound className="h-6 w-6 hover:text-green-primary-normal"/>
          </Link>
          <Link href="/cart">
            <ShoppingCart className={cn("h-6 w-6 hover:text-green-primary-normal", {
            "text-green-primary-normal" : isActive
          })}/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
