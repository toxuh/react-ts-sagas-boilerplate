import {
  StrictEffect,
  all,
  call,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import {
  archiveCampaignApi,
  deleteCampaignApi,
  fetchCampaignsListApi,
} from '../../api';

import { archiveCampaignByIdAction, deleteCampaignByIdAction } from './actions';
import {
  ARCHIVE_CAMPAIGN_BY_ID,
  DELETE_CAMPAIGN_BY_ID,
  FETCH_CAMPAIGNS_LIST,
} from './types';

export function* fetchCampaignsList(): Generator<StrictEffect> {
  yield call(fetchCampaignsListApi);
}

export function* archiveCampaign({
  payload: id,
}: ReturnType<typeof archiveCampaignByIdAction>): Generator<StrictEffect> {
  yield call(archiveCampaignApi, { id });
}

export function* deleteCampaign({
  payload: id,
}: ReturnType<typeof deleteCampaignByIdAction>): Generator<StrictEffect> {
  yield call(deleteCampaignApi, { id });
}

export default function* campaignsSagas(): Generator {
  yield all([
    takeLatest(FETCH_CAMPAIGNS_LIST, fetchCampaignsList),
    takeEvery(ARCHIVE_CAMPAIGN_BY_ID, archiveCampaign),
    takeEvery(DELETE_CAMPAIGN_BY_ID, deleteCampaign),
  ]);
}
