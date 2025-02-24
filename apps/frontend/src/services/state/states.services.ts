import { State } from "@/lib/interfaces/state/state.interfaces";
import { AxiosResponse } from "axios";
import request from "../request";


export const readAllStatesService = async (): Promise<State[]> => {
    const response: AxiosResponse<State[]> = await request({
        method: 'GET',
        url: '/states'
    })

    return response.data
}