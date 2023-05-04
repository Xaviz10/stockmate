import { Http } from "../repositories/http";
import axios, { AxiosResponse } from "axios";

export function httpService(): Http {
  return {
    setBaseConfig(baseUrl: string, version: string): void {
      axios.defaults.baseURL = `${baseUrl}${version}`;
    },
    post<T>(url: string, data: T): Promise<AxiosResponse> {
      return axios.post(url, data);
    },
    patch<T>(url: string, data: T): Promise<AxiosResponse> {
      return axios.patch(url, data);
    },
    get<T>(url: string, params?: T): Promise<AxiosResponse> {
      return axios.get(url, { params });
    },
    deleteRequest<T>(url: string, params?: T): Promise<AxiosResponse> {
      return axios.delete(url, { params });
    },
  };
}
