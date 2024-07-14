export interface IBaseResponse {
    status: 'ok' | 'error'
    errorCode?: string
    errorMessage?: string

    isSuccess: boolean
    isFail: boolean

    [key: string]: any
}