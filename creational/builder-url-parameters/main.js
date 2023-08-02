"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRequestBuilder_1 = require("./ApiRequestBuilder");
function main() {
    var apiUrl = 'https://api.example.com/:id'; // Replace with your 3rd party API URL
    var params = { id: 123 };
    var query = { param1: 'value1', param2: 'value2' };
    var body = { name: 'John Doe', email: 'john.doe@example.com', age: 30 };
    var requestConfig = new ApiRequestBuilder_1.ApiRequestBuilder(apiUrl)
        .withParams(params)
        .withQuery(query)
        .withBody(body)
        .build();
    console.log('Request Config:', requestConfig);
}
main();
