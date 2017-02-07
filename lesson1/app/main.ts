import {Response, Http} from "./http";
let http = new Http();

http.request({method: 'GET'}, function (response: Response) {
    console.log(response.status);
});
