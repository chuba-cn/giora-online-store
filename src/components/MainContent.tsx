import { ChevronRight, House } from "lucide-react";
import ProductsList from "./ProductsList";
import { cn } from "@/lib/utils";
import { products } from "@/constants";

const MainContent = () => {
    const num = [1,2,3,4,5];
  return (
    <section className="lg:py-8 lg:pl-8 pl-2 w-full">
      <div className="flex flex-col items-start justify-between space-y-8 w-full mb-6">
        <div className="lg:flex items-center justify-start gap-2 hidden">
          <House className="h-6 w-6 text-backgrounds-hover" />
          <p className="font-nunitosans text-backgrounds-hover">Home</p>
          <ChevronRight className="h-6 w-6 text-backgrounds-hover" />
          <p className="font-bold font-nunito text-texts-normal">Women</p>
        </div>

        <h1 className="text-texts-normal font-bold font-nunito text-xl hidden lg:block">
          Women Dresses
        </h1>
      </div>

      <ProductsList products={products}/>

      <div className="mt-6 lg:mt-10 flex flex-row justify-start items-start gap-4">
        {num.map((num) => (
            <p key={num} className={cn("text-backgrounds-hover font-nunito lg:font-nunito text-[1rem] lg:text-[1.25rem] hover:text-green-primary-normal cursor-pointer", 
                num === 1 && "border-b-[3px] text-green-primary-normal border-b-orange-secondary-normal font-bold"
            )}>
                {num}
            </p>
        ))}
      </div>
    </section>
  );
};

export default MainContent;
