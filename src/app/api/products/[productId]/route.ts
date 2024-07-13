import { Product } from "@/types/types";
import axios from "axios";
import { NextRequest } from "next/server";
import { cookies} from "next/headers";

const BASE_URL = "https://api.timbu.cloud";
const axiosInstance = axios.create({ baseURL: BASE_URL });

const ORGANIZATION_ID = process.env.NEXT_PUBLIC_TIMBU_ORGANIZATION_ID;
const APP_ID = process.env.NEXT_PUBLIC_TIMBU_API_ID;
const API_KEY = process.env.TIMBU_API_KEY;

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const productID = params.productId;
  const allCookies = cookies();

  try {
    const response = await axiosInstance.get<Product>(`products/${productID}`, {
      params: {
        organization_id: ORGANIZATION_ID,
        Appid: APP_ID,
        Apikey: API_KEY,
      },
    });

    const data = response.data;
    return Response.json(data);

  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
        return new Response(JSON.stringify({ error: `Failed to fetch product: ${error.message}` }), {
            status: error.response?.status || 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } else {
        // Unexpected error
        console.error('Unexpected error:', error);
        return new Response(JSON.stringify({ error: "An unexpected error occurred" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
  }
}