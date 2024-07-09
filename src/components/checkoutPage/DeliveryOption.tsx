import { MapPinIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { CarFrontIcon } from "lucide-react";

const DeliveryOption = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
        <p className="font-nunito font-bold text-[1rem] lg:text-[1.25rem] lg:text-black text-texts-normal">How do you want your delivery?</p>
        <div className="flex gap-4 justify-start w-full">
            <Button className=" text-[1rem] font-nunitosans border border-green-primary-normal rounded-md p-4 bg-green-primary-light hover:bg-white text-green-primary-normal">
                <CarFrontIcon className="h-6 w-6 text-green-primary-normal mr-2"/> Delivery
            </Button>
            <Button className=" text-[1rem] border font-nunitosans border-green-primary-normal rounded-md p-4 bg-transparent hover:bg-gray-300 text-green-primary-normal">
                <MapPinIcon className="h-6 w-6 text-green-primary-normal mr-2"/>In-Store Pickup
            </Button>
        </div>
    </div>
  )
}

export default DeliveryOption