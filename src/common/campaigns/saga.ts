import { StrictEffect, all, call, takeLatest } from 'redux-saga/effects';

import {
  archiveCampaignApi,
  createCampaignApi,
  deleteCampaignApi,
  fetchCampaignsListApi,
} from '../../api';

import {
  archiveCampaignByIdAction,
  createNewCampaignAction,
  deleteCampaignByIdAction,
  fetchCampaignsListAction,
} from './actions';
import {
  ARCHIVE_CAMPAIGN_BY_ID,
  CREATE_NEW_CAMPAIGN,
  DELETE_CAMPAIGN_BY_ID,
  FETCH_CAMPAIGNS_LIST,
} from './constants';
import { CampaignType } from './types';

export function* fetchCampaignsList({
  payload,
}: ReturnType<typeof fetchCampaignsListAction>): Generator<StrictEffect> {
  yield call(fetchCampaignsListApi, { ...payload });
}

export function* createNewCampaign({
  payload: data,
}: ReturnType<typeof createNewCampaignAction>): Generator<
  StrictEffect,
  CampaignType,
  CampaignType
> {
  const response = yield call(createCampaignApi, { ...data });

  if (response.link) {
    yield call(fetchCampaignsListApi);
  }

  return response;
}

export function* archiveCampaign({
  payload: id,
}: ReturnType<typeof archiveCampaignByIdAction>): Generator<StrictEffect> {
  yield call(archiveCampaignApi, { id });
}

export function* deleteCampaign({
  payload: id,
}: ReturnType<typeof deleteCampaignByIdAction>): Generator {
  const response = yield call(deleteCampaignApi, { id });

  if (response) {
    return;
  }

  yield call(fetchCampaignsListApi);
}

export default function* campaignsSagas(): Generator {
  yield all([
    takeLatest(FETCH_CAMPAIGNS_LIST, fetchCampaignsList),
    takeLatest(CREATE_NEW_CAMPAIGN, createNewCampaign),
    takeLatest(ARCHIVE_CAMPAIGN_BY_ID, archiveCampaign),
    takeLatest(DELETE_CAMPAIGN_BY_ID, deleteCampaign),
  ]);
}
