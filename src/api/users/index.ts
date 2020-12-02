import { StrictEffect } from 'redux-saga/effects';

import handleRequest from '../utils/handleRequest';

import { FETCH_USER, FETCH_USERS } from '../../common/users/types';

export const fetchUsersList = (): Generator<StrictEffect> =>
  handleRequest(FETCH_USERS, {
    url: 'users',
    method: 'get',
  });

export const fetchUser = ({ id }: { id: string }): Generator<StrictEffect> =>
  handleRequest(FETCH_USER, {
    url: `users/${id}`,
    method: 'get',
  });
