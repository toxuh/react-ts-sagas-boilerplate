import { StrictEffect, all, call, takeLatest } from 'redux-saga/effects';

import { checkUser, loginUser, registerUser } from '../../api';

import { loginUserAction, registerUserAction } from './actions';
import { CHECK_USER, LOGIN_USER, REGISTER_USER } from './types';

export function* checkUserData(): Generator<StrictEffect> {
  yield call(checkUser);
}

export function* login({
  payload,
}: ReturnType<typeof loginUserAction>): Generator<StrictEffect> {
  yield call(loginUser, { ...payload });
}

export function* register({
  payload,
}: ReturnType<typeof registerUserAction>): Generator<StrictEffect> {
  const response = yield call(registerUser, { ...payload });

  console.log(response);
}

export default function* usersSagas(): Generator {
  yield all([
    takeLatest(CHECK_USER, checkUserData),
    takeLatest(REGISTER_USER, register),
    takeLatest(LOGIN_USER, login),
  ]);
}
