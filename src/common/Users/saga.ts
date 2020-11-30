import { StrictEffect, call, put, takeLatest } from 'redux-saga/effects';

import { fetchExample } from '../../api';

import { FETCH_USERS, FETCH_USERS_SUCCESS } from './types';

export function* fetchUsersList(): Generator<StrictEffect, null, unknown> {
  const response = yield call(fetchExample);

  yield put({
    type: FETCH_USERS_SUCCESS,
    payload: response,
  });

  return null;
}

export default function* dummySagas(): Generator {
  yield takeLatest(FETCH_USERS, fetchUsersList);
}
