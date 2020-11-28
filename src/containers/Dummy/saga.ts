import { StrictEffect, call, put, takeLatest } from 'redux-saga/effects';

import { fetchExample } from '../../api';

import { ANOTHER_DUMMY_CONST, DUMMY_CONST } from './types';

export function* dummySagaFunction(): Generator<StrictEffect, null, unknown> {
  const response = yield call(fetchExample);

  yield put({
    type: ANOTHER_DUMMY_CONST,
    payload: response,
  });

  return null;
}

export default function* dummySagas(): Generator {
  yield takeLatest(DUMMY_CONST, dummySagaFunction);
}
