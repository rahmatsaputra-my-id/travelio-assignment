import axios from 'axios';

const baseConfig = {
  baseURL: 'https://www.googleapis.com',
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
  timeout: 10000,
};

const api = axios.create(baseConfig);

api.interceptors.request.use(async function (config) {
  return config;
});

api.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default api;
