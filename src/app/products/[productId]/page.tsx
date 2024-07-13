"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/hooks/useProduct";
import { Loader2, XCircleIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/components/providers/CartProvider";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProductPage = () => {
  const params = useParams<{ productId: string }>();
  const productID = params.productId;
  const router = useRouter();
  const { dispatch } = useCart();
  const { toast } = useToast();

  const { data, isError, isLoading, refetch } = useProduct(productID);
  const images = [data?.imgURL, data?.imgURLTwo]

  if (isLoading) {
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
        <p className="font-nunitosans text-[1.25rem] text-texts-normal font-bold">
          Failed to fetch product
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            className="text-[1rem] font-nunitosans border border-green-primary-normal rounded-md p-4 hover:bg-green-primary-light bg-white text-green-primary-normal"
            onClick={() => refetch()}
          >
            Try Again
          </Button>

          <Button
            className="text-[1rem] font-nunitosans border border-green-primary-normal rounded-md p-4 hover:bg-green-primary-light bg-white text-green-primary-normal"
            onClick={() => router.push("/")}
          >
            Back to all products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <MaxWidthWrapper className="py-6 lg:py-8">
      <Button
        className="text-[1rem] font-nunitosans border border-green-primary-normal rounded-md p-4 hover:bg-green-primary-light bg-white text-green-primary-normal mb-5"
        onClick={() => router.push("/")}
      >
        All Products
      </Button>
      <div className="flex md:flex-row flex-col gap-10 md:gap-20 items-center justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none border-0">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        alt="product image"
                        src={`https://api.timbu.cloud/images/${image}`}
                        width={450}
                        height={450}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex flex-col justify-start items-start gap-2">
          <p className="font-nunito font-bold text-4xl text-texts-normal place-self-start">
            {data?.name}
          </p>
          <p className="font-open text-[1.25rem]">{data?.description}</p>
          <p className="font-nunito font-bold text-[1.25rem] text-texts-normal place-self-start">
            ${data?.price}
          </p>
          <p className="font-nunitosans text-sm text-texts-normal">In stock</p>
          <p>Free shipping</p>
          <Button
            className="text-[1rem] w-full font-nunitosans border border-green-primary-normal rounded-md p-4 hover:bg-green-primary-normal bg-green-primary-dark text-green-primary-light"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: { id: data?.id!, name: data?.name!, price: data?.price!, quantity: 1, imgUrl: data?.imgURL!},
              });
              toast({
                title: "Added to cart",
                description: "Product added succesfully",
                className: "bg-white text-[1.25rem] font-bold font-nunito",
              });
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductPage;
