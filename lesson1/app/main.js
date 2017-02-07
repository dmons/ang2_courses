"use strict";
var http_1 = require("./http");
var http = new http_1.Http();
http.request({ method: 'GET' }, function (response) {
    console.log(response.status);
});
//# sourceMappingURL=main.js.map