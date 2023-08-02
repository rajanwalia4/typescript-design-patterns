// ApiRequestBuilder.ts

interface ApiRequest {
    url: string;
    params?: Record<string, any>;
    query?: Record<string, any>;
    body?: Record<string, any>;
  }
  
export class ApiRequestBuilder {
    private request: ApiRequest;
  
    constructor(url: string) {
      this.request = { url };
    }
  
    withParams(params: Record<string, any>): ApiRequestBuilder {
      this.request.params = params;
      return this;
    }
  
    withQuery(query: Record<string, any>): ApiRequestBuilder {
      this.request.query = query;
      return this;
    }
  
    withBody(body: Record<string, any>): ApiRequestBuilder {
      this.request.body = body;
      return this;
    }
  
    build(): ApiRequest {
      const { url, params, query, body } = this.request;
      let fullUrl = url;
  
      if (params) {
        Object.keys(params).forEach((key) => {
          fullUrl = fullUrl.replace(`:${key}`, params[key].toString());
        });
      }
  
      if (query) {
        const queryString = Object.keys(query)
          .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key].toString())}`)
          .join('&');
        fullUrl += `?${queryString}`;
      }
  
      this.request.url = fullUrl;
      // this.request.params = undefined;
      // this.request.query = undefined;
  
      return this.request;
    }
  }
