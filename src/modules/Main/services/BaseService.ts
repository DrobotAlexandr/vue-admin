class BaseService {


    public static returnError(code: string) {

        let errorMessage = '';

        if (code) {
            errorMessage = code;
        }

        return {
            status: 'error',
            errors: [
                {
                    code: code,
                    message: errorMessage
                }
            ]
        };
    }


}

export default BaseService;