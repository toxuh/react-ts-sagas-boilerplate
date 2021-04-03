import { FETCH_VIDEO_INFO } from './constants';
import { FetchVideoInfoActionType } from './types';

/* eslint-disable-next-line */
export const fetchVideoInfoAction = (id: string): FetchVideoInfoActionType =>
  ({
    type: FETCH_VIDEO_INFO,
    payload: id,
  } as const);
