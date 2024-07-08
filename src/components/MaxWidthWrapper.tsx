import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn("mx-auto max-w-full px-5 lg:px-16", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;