import { sidebarCategory, sidebarColor, sidebarStyle } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronUp, CircleCheck } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="flex flex-col items-start justify-between space-y-8">
      <div>
        <p className="font-bold font-nunito text-lg mr-8 inline">Sort by</p>
        <ChevronUp className="h-6 w-6 inline" />
      </div>
      <div className="flex flex-col space-y-4 items-start justify-start">
        <p className="font-nunito font-bold uppercase">Category</p>
        <div className="flex flex-col space-y-4 items-start justify-start">
          {sidebarCategory.map((category) => (
            <Link
              href={"/"}
              key={category.id}
              className={cn("font-nunitosans hover:text-green-primary-normal transition-colors", category.title.startsWith("Dresses") && "text-green-primary-dark font-bold")}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-4 items-start justify-start">
        <p className="font-nunito font-bold uppercase">Style</p>
        <div className="flex flex-col space-y-4 items-start justify-start">
          {sidebarStyle.map((style) => (
            <label key={style.id} className="flex items-center space-x-2 font-nunitosans">
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
            <CircleCheck className="h-5 w-5 text-gray-500"/>
          {sidebarColor.map((color) => (
            <div key={color.id} className="h-5 w-5 rounded-full cursor-pointer" style={{backgroundColor: `${color.color}`}}>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;