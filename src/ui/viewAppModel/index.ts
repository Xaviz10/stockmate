import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
// import TagManager from "react-gtm-module";

export function useViewAppModel() {
  const dispatch = useDispatch();

  const handleResponseSuccess = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  const handleResponseError = (error: any) => {
    switch (error?.response?.status) {
      /* case 400:
        toast.error(error.response.data.message);
        break; */
      case 401:
        break;
      case 500:
        toast.error(
          "Se ha producido un error inesperado, por favor vuelve a intentarlo"
        );
        break;
      default:
        console.log({ error });
    }
    throw error;
  };

  const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );

  useEffect(() => {
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);

  // useEffect(() => {
  //   if (!isLocalhost) {
  //     const tagManagerArgs = {
  //       gtmId: import.meta.env.REACT_APP_API_GTM_ID as string,
  //     };
  //     TagManager.initialize(tagManagerArgs);
  //   }
  // }, [isLocalhost]);
}
