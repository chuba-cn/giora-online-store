import { Products } from "@/types/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { StaticImageData } from "next/image";

const SKYBLUE = "#0CE5DD";
const VIOLET = "#E50CC2";
const PURPLE = "#920CE5";
const GREEN = "#2AE50C";
const BLUE = "#0C2FE5";
const RED = "#E50C0C";
const YELLOW = "#E5B50C";
const LEMON = "#85E50C";
const GOLD = "#927306";
const NAVY = "#10413F";
const GREY = "#354145";

export type Color =
  | typeof SKYBLUE
  | typeof VIOLET
  | typeof PURPLE
  | typeof GREEN
  | typeof BLUE
  | typeof RED
  | typeof YELLOW
  | typeof LEMON
  | typeof GOLD
  | typeof NAVY
  | typeof GREY;

  export type FormattedResponse = {
    page: number;
    size: number;
    totalProducts: number;
    PreviousPage: string | null;
    nextPage: string | null;
    items: {
      id: string,
      title: string,
      description: string | null,
      price: number,
      imgUrl: string,
      imgUrlTwo: string,
      colors: Color[] | string[]
    }[];
  };
  

export const COLORS: Color[] = [
  SKYBLUE,
  VIOLET,
  PURPLE,
  GREEN,
  BLUE,
  RED,
  YELLOW,
  LEMON,
  GOLD,
  NAVY,
  GREY,
];

export const getRandomColors = (numColors: number): Color[] => {
  const shuffledColors = [...COLORS].sort(() => 0.5 - Math.random());
  return shuffledColors.slice(0, numColors);
};

export const fetchProducts = async (page = 1, size = 12) => {
  try {
    const response = await axios.get<Products>(
      `api/products?page=${page}&size=${size}`
    );
    const data = response.data;
    const formattedResponse: FormattedResponse = {
      page: data.page,
      size: data.size,
      totalProducts: data.total,
      PreviousPage: data.previous_page,
      nextPage: data.next_page,
      items: data.items.map((product) => {
        return {
          id: product.id,
          title: product.name,
          description: product.description,
          price: product.current_price[0].NGN[0],
          imgUrl: `https://api.timbu.cloud/images/${product.photos[0].url}`,
          imgUrlTwo: `https://api.timbu.cloud/images/${product.photos[1].url}`,
          colors: getRandomColors(4),
        };
      })
    }

    return formattedResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export function usePaginatedProducts(page: number, size: number) {
  return useQuery({
    queryKey: ["products", { page }],
    queryFn: () => fetchProducts(page),
    placeholderData: keepPreviousData,
  });
}
