import { Product } from "@/types/types";
import axios from "axios";
import { getRandomColors } from "./usePaginatedProducts";
import { useQuery } from "@tanstack/react-query";

export const getProduct = async (productId: string) => {
  try {
    const response = await axios.get<Product>(`/api/products/${productId}`);

    const data = response.data;
    const formattedResponse = {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.current_price as unknown as number,
      imgURL: data.photos[0].url,
      imgURLTwo: data.photos[1].url,
      colors: getRandomColors(4),
    };

    return formattedResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch product: ${error.message}`);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export function useProduct(productID: string) {
  return useQuery({
    queryKey: ["products", { productID }],
    queryFn: () => getProduct(productID),
  });
}