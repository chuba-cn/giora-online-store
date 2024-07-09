import { ChevronDown, ChevronRight, CircleCheck, House } from "lucide-react";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { sidebarCategory, sidebarColor, sidebarStyle } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileSubNav = () => {
  return (
    <div className="flex flex-col items-start justify-between space-y-8 py-7 w-full">
      <div className="flex items-center justify-start gap-2">
        <House className="h-6 w-6 text-backgrounds-hover" />
        <p className="font-nunitosans text-backgrounds-hover">Home</p>
        <ChevronRight className="h-6 w-6 text-backgrounds-hover" />
        <p className="font-bold font-nunito text-texts-normal">Women</p>
      </div>
      <div className="flex flex-row justify-between items-center gap-7 w-full">
        <h1 className="text-texts-normal font-bold font-nunito text-xl">
          Women Dresses
        </h1>
        <div className="flex flex-row gap-6 items-center">
          <p className="font-bold font-nunito">Sort by</p>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <ChevronDown className="h-6 w-6 text-texts-normal hover:text-green-primary-normal hover:animate-ping transition-colors" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="border-none bg-backgrounds-light w-[300px] overflow-scroll"
            >
              <section className="flex flex-col items-start justify-between space-y-8">
                <div className="flex flex-col space-y-4 items-start justify-start">
                  <p className="font-nunito font-bold uppercase">Category</p>
                  <div className="flex flex-col space-y-4 items-start justify-start">
                    {sidebarCategory.map((category) => (
                      <div key={category.id}>
                        <SheetClose asChild>
                          <Link
                            href={"/"}
                            className={cn("font-nunitosans hover:text-green-primary-normal transition-colors", category.title.startsWith("Dresses") && "text-green-primary-dark font-bold")}
                          >
                            {category.title}
                          </Link>
                        </SheetClose>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-4 items-start justify-start">
                  <p className="font-nunito font-bold uppercase">Style</p>
                  <div className="flex flex-col space-y-4 items-start justify-start">
                    {sidebarStyle.map((style) => (
                      <label
                        key={style.id}
                        className="flex items-center space-x-2 font-nunitosans"
                      >
                        <input
                          type="checkbox"
                          className=" h-5 w-5 rounded border-gray-300 text-green-primary-dark shadow-sm focus:border-green-primary-normal focus:ring focus:ring-offset-0 focus:ring-green-primary-normal focus:ring-opacity-50"
                        />
                        <span>{style.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-4 items-start justify-start">
                  <p className="font-nunito font-bold uppercase">color</p>
                  <div className="grid grid-cols-6 gap-2">
                    <CircleCheck className="h-5 w-5 text-gray-500" />
                    {sidebarColor.map((color) => (
                      <div
                        key={color.id}
                        className="h-5 w-5 rounded-full cursor-pointer"
                        style={{ backgroundColor: `${color.color}` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </section>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default MobileSubNav;
