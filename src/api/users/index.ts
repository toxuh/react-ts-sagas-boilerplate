import { StrictEffect } from 'redux-saga/effects';

import handleRequest from '../utils/handleRequest';

import {
  FETCH_USER_DATA,
  LOGIN_USER,
  REGISTER_USER,
  UserLoginType,
  UserRegistrationType,
} from '../../common/users/types';

import { AuthURL, TokenURL } from './utils';

export const fetchUserInfo = (): Generator<StrictEffect> =>
  handleRequest(FETCH_USER_DATA, {
    url: AuthURL('me'),
    method: 'get',
  });

export const registerUser = (
  data: UserRegistrationType,
): Generator<StrictEffect> =>
  handleRequest(REGISTER_USER, {
    url: 'auth/users',
    method: 'post',
    data: {
      ...data,
      username: data.email,
    },
  });

export const loginUser = (data: UserLoginType): Generator<StrictEffect> =>
  handleRequest(LOGIN_USER, {
    url: TokenURL('login'),
    method: 'post',
    data,
  });
