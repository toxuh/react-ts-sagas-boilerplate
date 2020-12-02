import { StrictEffect, call, takeLatest } from 'redux-saga/effects';

import { fetchUsersList } from '../../api';

import { FETCH_USERS } from './types';

export function* fetchUsers(): Generator<StrictEffect> {
  yield call(fetchUsersList);
}

export default function* usersSagas(): Generator {
  yield takeLatest(FETCH_USERS, fetchUsers);
}
