import { ChevronUp } from "lucide-react";

const Sidebar = () => {
  return (
    <section className="flex flex-col items-start justify-between space-y-8">
      <div>
        <p className="font-bold font-nunito text-lg mr-8 inline">Sort by</p>
        <ChevronUp className="h-6 w-6 inline" />
      </div>
    </section>
  );
};

export default Sidebar;