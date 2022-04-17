import axios from "axios";

export const AXIOS_INSTANCE = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    headers: {
      Accept: 'application/json',
    },
  });

// AXIOS_INSTANCE.defaults.headers['Accept'] = "application/json";
AXIOS_INSTANCE.defaults.headers['Content-Type'] = 'application/json';