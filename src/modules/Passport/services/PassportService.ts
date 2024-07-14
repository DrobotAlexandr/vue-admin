import PassportApi from "@/modules/Passport/api/PassportApi";
import BaseService from "@/modules/Main/services/BaseService";
import {ILoginResponse} from "@/modules/Passport/interfaces/api/ILoginResponse";


class PassportService extends BaseService {

    public static async login({login, password, remember}: {
        login: string,
        password: string,
        remember: boolean
    }): Promise<ILoginResponse> {

        if (!login) {
            // return this.returnError('paramsLoginRequired');
        }

        if (!password) {
            // return this.returnError('paramsPasswordRequired');
        }

        return PassportApi.login({
            login: login,
            password: password,
            remember: remember
        });

    }

}

export default PassportService;