import BaseApi from "@/modules/Main/api/BaseApi";
import {ILoginResponse} from "@/modules/Passport/interfaces/api/ILoginResponse";

class PassportApi extends BaseApi {

    public static async login(data: object): Promise<ILoginResponse> {
        return this.request('/api/passport/login', data)
    }
}

export default PassportApi;