import request from "@/services/request"
import { AxiosResponse } from "axios";

export const getCategoriesService = async (): Promise<any> => {
    try {
        const response: AxiosResponse = await request({
            method: "GET",
            url: "/categories",
        })

        return response.data;
    } catch (error) {
        return error;
    }
}
