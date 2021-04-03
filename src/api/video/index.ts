import { StrictEffect } from 'redux-saga/effects';

import handleRequest from '../utils/handleRequest';

import { FETCH_VIDEO_INFO } from '../../common/video/constants';

/* eslint-disable-next-line */
export const fetchVideoInfoApi = (id: string): Generator<StrictEffect> =>
  handleRequest(FETCH_VIDEO_INFO, {
    url: 'video/check',
    method: 'get',
    params: {
      v: id,
    },
  });
