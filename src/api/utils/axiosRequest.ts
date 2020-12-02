import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { BASE_API_URL } from '../constants';

export default ({ url, method }: AxiosRequestConfig): AxiosPromise =>
  axios({ url: `${BASE_API_URL}${url}`, method }).then(
    (response) => response.data,
  );
