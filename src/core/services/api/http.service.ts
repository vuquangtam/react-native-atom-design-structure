import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

class HTTP {
  request(config: AxiosRequestConfig): AxiosPromise {
    return axios.request(config);
  }

  get(url: string, config: AxiosRequestConfig): AxiosPromise {
    return axios.get(url, config);
  }

  post(url: string, config: AxiosRequestConfig): AxiosPromise {
    return axios.post(url, config);
  }

  put(url: string, config: AxiosRequestConfig): AxiosPromise {
    return axios.put(url, config);
  }

  patch(url: string, config: AxiosRequestConfig): AxiosPromise {
    return axios.patch(url, config);
  }

  delete(url: string, config: AxiosRequestConfig): AxiosPromise {
    return axios.delete(url, config);
  }

  upload() {

  }
}

export default HTTP;
