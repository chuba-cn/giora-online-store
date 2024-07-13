import { NextRequest } from "next/server";
import axios from "axios";
import { Products } from "@/types/types";

const BASE_URL = "https://api.timbu.cloud";
const axiosInstance = axios.create({ baseURL: BASE_URL });
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_TIMBU_ORGANIZATION_ID;
const APP_ID = process.env.NEXT_PUBLIC_TIMBU_API_ID;
const API_KEY = process.env.TIMBU_API_KEY;



export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") || "1";
    const size = searchParams.get("size") || "12";

    try {
        const response = await axiosInstance.get<Products>(`products`, {
            params: {
                organization_id: ORGANIZATION_ID,
                reverse_sort: true,
                page,
                size,
                Appid: APP_ID,
                Apikey: API_KEY
            }
        });

        const data = response.data;
        return Response.json(data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
            return new Response(JSON.stringify({ error: `Failed to fetch products: ${error.message}` }), {
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