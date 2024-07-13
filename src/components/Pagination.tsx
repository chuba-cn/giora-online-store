import { cn } from "@/lib/utils";

interface PaginationProps {
    currentPage: number,
    total: number,
    size: number,
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, total, size, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(total / size);

    const handlePageChange = (page: number) => {
        if(page >=1 && page <= totalPages){
            onPageChange(page)
        }
    };

    return (
      <div className="mt-6 lg:mt-10 flex flex-row justify-start items-start gap-4 max-lg:py-5">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <p
              key={page}
              onClick={() => handlePageChange(page)}
              className={cn("text-backgrounds-hover font-nunito lg:font-nunito text-[1rem] lg:text-[1.25rem] hover:text-green-primary-normal cursor-pointer", 
                (page === currentPage ) && "border-b-[3px] text-green-primary-normal border-b-orange-secondary-normal font-bold"
            )}
            >
              {page}
            </p>
          )
        )}
      </div>
    );
}

export default Pagination