"use strict";
var Http = (function () {
    function Http(URI) {
        if (URI === void 0) { URI = 'google.com'; }
        this.URI = URI;
    }
    Http.prototype.request = function (params, callback) {
        var response = { status: '300' };
        callback(response);
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=http.js.map