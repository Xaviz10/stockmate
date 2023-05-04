import { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
export interface requestHandler {
  successRequest(request: AxiosRequestConfig): AxiosRequestConfig;
  errorRequest(error: AxiosError): AxiosError;
}
export interface responseHandler {
  successResponse(response: AxiosResponse): AxiosResponse;
  errorResponse(error: any): any;
}
export interface Http {
  post<T>(url: string, data: T): Promise<AxiosResponse>;
  patch<T>(url: string, data: T): Promise<AxiosResponse>;
  get<T>(url: string, params?: T): Promise<AxiosResponse>;
  deleteRequest<T>(url: string, params?: T): Promise<AxiosResponse>;
  setBaseConfig(baseUrl: string, version: string): void;
}
