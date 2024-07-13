'use client';

import { ChevronRight, House, Loader2 } from "lucide-react";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import { useState } from "react";
import { usePaginatedProducts } from "@/hooks/usePaginatedProducts";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "./ui/button";

const MainContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;

    const { data, isError, isLoading, refetch} = usePaginatedProducts(currentPage, pageSize);

    if(isLoading){
      return (
        <div className="flex justify-center items-center w-full py-60">
          <Loader2 className="text-green-primary-dark h-14 w-14 animate-spin" />
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex flex-col justify-center items-center py-60 gap-6">
          <XCircleIcon className="text-texts-dark w-10 h-10" />
          <p className="font-nunitosans text-[1.25rem] text-texts-normal font-bold">Failed to fetch products</p>
          <Button
            className="text-[1rem] font-nunitosans border border-green-primary-normal rounded-md p-4 hover:bg-green-primary-light bg-white text-green-primary-normal"
            onClick={() => refetch()}
          >
            Try Again
          </Button>
        </div>
      );
    }

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

      <ProductsList products={data!}/>

      <Pagination
        currentPage={data?.page!}
        total={data?.totalProducts!}
        size={data?.size!}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

export default MainContent;
