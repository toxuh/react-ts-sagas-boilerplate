import axios from 'axios';

import { DummyType } from '../containers/Dummy/types';

/* eslint-disable-next-line */
export const fetchExample = () =>
  axios
    .get<DummyType[]>('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data);
