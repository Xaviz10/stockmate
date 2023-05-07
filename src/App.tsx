import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Routing } from "./ui/routes";
import axios, { AxiosRequestConfig } from "axios";
import { Provider } from "react-redux";
import Store from "./data/dto/store";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE;

const handleRequestSuccess = (
  request: AxiosRequestConfig
): AxiosRequestConfig => {
  const { headers } = request;
  const globalState = Store?.store?.getState();
  if (headers) {
    headers["Content-Type"] = "application/vnd.api+json";
    headers.accept = "application/vnd.api+json";
  }

  return request;
};
const handleRequestError = (error: any) => {
  console.log(`REQUEST ERROR! => ${error}`);
  return error;
};

// axios.interceptors.request.use(handleRequestSuccess, handleRequestError);

function App() {
  return (
    <Provider store={Store.store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <Toaster />
    </Provider>
  );
}

export default App;
