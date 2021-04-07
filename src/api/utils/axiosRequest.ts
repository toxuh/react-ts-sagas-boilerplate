import { AxiosPromise, AxiosRequestConfig } from 'axios';
import store from 'store2';

import axiosInstance from './axiosWithHumps';

import { BASE_API_URL, LS_TOKEN_NAME } from '../constants';

export default (config: AxiosRequestConfig): AxiosPromise => {
  const token = store.get(LS_TOKEN_NAME);

  const configWithUrl = {
    ...config,
    url: `${BASE_API_URL}${config.url}/`,
    headers: {
      Authorization: token ? `Token ${token}` : '',
    },
  };

  return axiosInstance(configWithUrl).then((response) => response.data);
};
