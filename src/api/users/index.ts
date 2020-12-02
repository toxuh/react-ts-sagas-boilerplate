import handleRequest from '../utils/handleRequest';

import { FETCH_USERS } from '../../common/Users/types';

/* eslint-disable-next-line */
export const fetchUsersList = () =>
  handleRequest(FETCH_USERS, {
    url: 'users',
    method: 'get',
  });
