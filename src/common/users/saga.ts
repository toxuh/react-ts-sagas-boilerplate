import { StrictEffect, all, call, takeLatest } from 'redux-saga/effects';

import { fetchUser, fetchUsersList } from '../../api';

import { handleFetchUserInfo } from './actions';
import { FETCH_USER, FETCH_USERS } from './types';

export function* fetchUsers(): Generator<StrictEffect> {
  yield call(fetchUsersList);
}

export function* fetchUserData({
  payload,
}: ReturnType<typeof handleFetchUserInfo>): Generator<StrictEffect> {
  yield call(fetchUser, { id: payload.id });
}

export default function* usersSagas(): Generator {
  yield all([
    takeLatest(FETCH_USERS, fetchUsers),
    takeLatest(FETCH_USER, fetchUserData),
  ]);
}
