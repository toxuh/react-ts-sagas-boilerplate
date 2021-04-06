import store from 'store2';
import { StrictEffect, all, call, takeLatest } from 'redux-saga/effects';

import api from '../../api';
import { LS_TOKEN_NAME } from '../../api/constants';

import { loginUserAction, registerUserAction } from './actions';
import { FETCH_USER_DATA, LOGIN_USER, REGISTER_USER } from './types';

export function* fetchUserData(): Generator<StrictEffect> {
  yield call(api.fetchUserInfo);
}

export function* login({
  payload,
}: ReturnType<typeof loginUserAction>): Generator<
  StrictEffect,
  { auth_token?: string },
  { auth_token?: string }
> {
  const response = yield call(api.loginUser, {
    ...payload,
  });

  if (response.auth_token) {
    store.set(LS_TOKEN_NAME, response.auth_token);

    // window.location.assign('/dashboard');
  }

  return response;
}

export function* register({
  payload,
}: ReturnType<typeof registerUserAction>): Generator<StrictEffect> {
  yield call(api.registerUser, { ...payload });
}

export default function* usersSagas(): Generator {
  yield all([
    takeLatest(FETCH_USER_DATA, fetchUserData),
    takeLatest(REGISTER_USER, register),
    takeLatest(LOGIN_USER, login),
  ]);
}
