import axios, {AxiosResponse} from "axios";
import {IBaseResponse} from "@/modules/Main/interfaces/IBaseResponse";

class BaseApi {

    protected static async request(endpoint: string, data: object): Promise<IBaseResponse> {

        axios.defaults.baseURL = 'http://localhost:3000/';
        axios.defaults.headers.common['Authorization'] = '';

        const res = await axios.post(endpoint, data);

        return res.data;

    }

}

export default BaseApi;