"use strict";
// ApiRequestBuilder.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequestBuilder = void 0;
var ApiRequestBuilder = /** @class */ (function () {
    function ApiRequestBuilder(url) {
        this.request = { url: url };
    }
    ApiRequestBuilder.prototype.withParams = function (params) {
        this.request.params = params;
        return this;
    };
    ApiRequestBuilder.prototype.withQuery = function (query) {
        this.request.query = query;
        return this;
    };
    ApiRequestBuilder.prototype.withBody = function (body) {
        this.request.body = body;
        return this;
    };
    ApiRequestBuilder.prototype.build = function () {
        var _a = this.request, url = _a.url, params = _a.params, query = _a.query, body = _a.body;
        var fullUrl = url;
        if (params) {
            Object.keys(params).forEach(function (key) {
                fullUrl = fullUrl.replace(":".concat(key), params[key].toString());
            });
        }
        if (query) {
            var queryString = Object.keys(query)
                .map(function (key) { return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(query[key].toString())); })
                .join('&');
            fullUrl += "?".concat(queryString);
        }
        this.request.url = fullUrl;
        // this.request.params = undefined;
        // this.request.query = undefined;
        return this.request;
    };
    return ApiRequestBuilder;
}());
exports.ApiRequestBuilder = ApiRequestBuilder;
