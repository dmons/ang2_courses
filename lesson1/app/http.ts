interface RequestParams {
    method: string;
    query?: string;
}
interface Response{
    status: string;
    data?: string;
}
interface ResponseCallback{
    (response: Response) : void
}

class Http{
    constructor(private URI: string = 'google.com') {    }
    request(params: RequestParams, callback: ResponseCallback){
        let response = { status: '300' } as Response;
        callback(response)
    }
}

export {RequestParams, Response, ResponseCallback, Http};
