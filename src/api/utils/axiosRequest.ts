import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { BASE_API_URL } from '../constants';

export default (config: AxiosRequestConfig): AxiosPromise => {
  const configWithUrl = {
    ...config,
    url: `${BASE_API_URL}${config.url}`,
  };

  return axios(configWithUrl).then((response) => response.data);
};
