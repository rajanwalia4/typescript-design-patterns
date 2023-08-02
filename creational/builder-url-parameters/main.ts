import { ApiRequestBuilder } from "./ApiRequestBuilder";

function main(){
    const apiUrl = 'https://api.example.com/:id'; // Replace with your 3rd party API URL
    const params = { id: 123 };
    const query = { param1: 'value1', param2: 'value2' };
    const body = { name: 'John Doe', email: 'john.doe@example.com', age: 30 };
    
    const requestConfig = new ApiRequestBuilder(apiUrl)
      .withParams(params)
      .withQuery(query)
      .withBody(body)
      .build();
    
    console.log('Request Config:', requestConfig);
}

main()