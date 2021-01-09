import { StrictEffect } from 'redux-saga/effects';

import handleRequest from '../utils/handleRequest';

import {
  CHECK_USER,
  REGISTER_USER,
  UserLoginType,
  UserRegistrationType,
} from '../../common/users/types';

import { AuthURL, TokenURL } from './utils';

/* eslint-disable-next-line */
export const checkUser = (): Generator<StrictEffect> =>
  handleRequest(CHECK_USER, {
    url: AuthURL('me/'),
    method: 'get',
  });

export const registerUser = (
  data: UserRegistrationType,
): Generator<StrictEffect> =>
  handleRequest(REGISTER_USER, {
    url: AuthURL(''),
    method: 'post',
    data,
  });

export const loginUser = (data: UserLoginType): Generator<StrictEffect> =>
  handleRequest(CHECK_USER, {
    url: TokenURL('login/'),
    method: 'post',
    data,
  });
