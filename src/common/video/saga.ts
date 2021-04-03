import { StrictEffect, all, call, takeLatest } from 'redux-saga/effects';

import api from '../../api';

import { fetchVideoInfoAction } from './actions';
import { FETCH_VIDEO_INFO } from './constants';

export function* fetchVideoData({
  payload: id,
}: ReturnType<typeof fetchVideoInfoAction>): Generator<StrictEffect> {
  yield call(api.fetchVideoInfoApi, id);
}

export default function* videoSagas(): Generator {
  yield all([takeLatest(FETCH_VIDEO_INFO, fetchVideoData)]);
}
