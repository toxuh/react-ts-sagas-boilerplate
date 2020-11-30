import axios from 'axios';

import { UserType } from '../common/Users/types';

/* eslint-disable-next-line */
export const fetchExample = () =>
  axios
    .get<UserType[]>('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data);
