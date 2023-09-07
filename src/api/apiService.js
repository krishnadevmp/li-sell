import axios from "axios";

const SERVICE_URL = `${process.env.REACT_APP_API_BASE_URL}v1/`;
export class ServiceCalls {
  static get(api, headers = setHeaders(), params) {
    const URL = SERVICE_URL + api;
    return new Promise((resolve, reject) => {
      axios
        .get(URL, { headers: headers.headers, params })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static post(api, body, headers = setHeaders(), params) {
    const URL = SERVICE_URL + api;
    return new Promise((resolve, reject) => {
      axios
        .post(URL, body, { headers: headers?.headers, params })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static put(api, body, headers = setHeaders(), params) {
    const URL = SERVICE_URL + api;
    return new Promise((resolve, reject) => {
      axios
        .put(URL, body, { headers: headers.headers, params })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static delete(api, headers = setHeaders(), params) {
    const URL = SERVICE_URL + api;
    return new Promise((resolve, reject) => {
      axios
        .delete(URL, { headers: headers.headers, params })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}

export const setHeaders = (contentType = "application/json; charset=utf-8") => {
  const headers = {
    "Content-Type": contentType,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  };
  return {
    headers,
  };
};
