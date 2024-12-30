import axios, { AxiosResponse, AxiosRequestHeaders } from "axios";
import ENVS from "@/lib/shared/envs";

type Props<TData, TResponse> = {
    method: "GET" | "POST" | "PUT" | "DELETE";
    url: string;
    params?: Record<string, unknown>;
    data?: TData;
    headers?: AxiosRequestHeaders;
};

const request = async <TData = void, TResponse = void>({
    method,
    url,
    params,
    data,
    headers
}: Props<TData, TResponse>): Promise<AxiosResponse<TResponse>> => {
    try {
        const response = await axios({
            url: url,
            data: data,
            method: method,
            params: params,
            baseURL: "http://localhost:3001/api",
            headers: headers,
        });

        return response;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
};

export default request;
