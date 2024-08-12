import { BASE_URL } from '@env';
import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from 'axios';

// Adjusted Axios interceptor setup
axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      (config.headers as AxiosRequestHeaders)['Content-Type'] = 'application/json';
    } else {
      config.headers = {
        'Content-Type': 'application/json',
      } as AxiosRequestHeaders;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

type HttpClientParams = {
  url: string;
  params?: Record<string, any>;
  method: string;
  data?: Record<string, any>;
};

export const createHttpClient = <T>({ url, params, method, data }: HttpClientParams): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_URL}${url}`,
      params,
      data: JSON.stringify(data),
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.data);
        } else {
          reject('Response is not success');
        }
      })
      .catch(error => {
        console.log('API error:', { error });
        reject(error);
      });
  });
};
