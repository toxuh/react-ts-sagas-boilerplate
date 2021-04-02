import { AxiosRequestConfig } from 'axios';
import { StrictEffect, call, put } from 'redux-saga/effects';

import axiosRequest from './axiosRequest';

function* handleRequest(
  action: string,
  config: AxiosRequestConfig,
): Generator<StrictEffect, { error: string }, { error: string }> {
  try {
    const response:
      | ReturnType<typeof axiosRequest>
      | { error: string } = yield call(axiosRequest, config);

    yield put({ type: `${action}/SUCCESS`, payload: response });

    return response;
  } catch (e) {
    yield put({
      type: `${action}/ERROR`,
      payload: e,
    });
  }

  return { error: 'Error' };
}

export default handleRequest;
