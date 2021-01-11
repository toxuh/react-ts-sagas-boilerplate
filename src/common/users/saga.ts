import store from 'store2';
import { StrictEffect, all, call, takeLatest } from 'redux-saga/effects';

import { fetchUserInfo, loginUser, registerUser } from '../../api';
import { LS_TOKEN_NAME } from '../../api/constants';

import { loginUserAction, registerUserAction } from './actions';
import { FETCH_USER_DATA, LOGIN_USER, REGISTER_USER } from './types';

export function* fetchUserData(): Generator<StrictEffect> {
  yield call(fetchUserInfo);
}

export function* login({
  payload,
}: ReturnType<typeof loginUserAction>): Generator<
  StrictEffect,
  { auth_token?: string },
  { auth_token?: string }
> {
  const response = yield call(loginUser, {
    ...payload,
  });

  if (response.auth_token) {
    store.set(LS_TOKEN_NAME, response.auth_token);
  }

  return response;
}

export function* register({
  payload,
}: ReturnType<typeof registerUserAction>): Generator<StrictEffect> {
  yield call(registerUser, { ...payload });
}

export default function* usersSagas(): Generator {
  yield all([
    takeLatest(FETCH_USER_DATA, fetchUserData),
    takeLatest(REGISTER_USER, register),
    takeLatest(LOGIN_USER, login),
  ]);
}
