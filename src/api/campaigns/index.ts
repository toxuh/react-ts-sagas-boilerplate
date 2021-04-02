import { StrictEffect } from 'redux-saga/effects';

import handleRequest from '../utils/handleRequest';

import { DEFAULT_PAGE } from '../constants';

import {
  ARCHIVE_CAMPAIGN_BY_ID,
  CREATE_NEW_CAMPAIGN,
  DELETE_CAMPAIGN_BY_ID,
  FETCH_ARCHIVED_CAMPAIGNS_LIST,
  FETCH_CAMPAIGNS_LIST,
} from '../../common/campaigns/constants';
import { CreateNewCampaignType } from '../../common/campaigns/types';

export const fetchCampaignsListApi = ({
  page = DEFAULT_PAGE,
}: {
  page?: number;
} = {}): Generator<StrictEffect> =>
  handleRequest(FETCH_CAMPAIGNS_LIST, {
    url: 'campaigns',
    method: 'get',
    params: {
      page,
    },
  });

export const fetchArchivedCampaignsListApi = (): Generator<StrictEffect> =>
  handleRequest(FETCH_ARCHIVED_CAMPAIGNS_LIST, {
    url: 'campaigns/archive',
    method: 'get',
  });

export const createCampaignApi = (
  data: CreateNewCampaignType,
): Generator<StrictEffect> =>
  handleRequest(CREATE_NEW_CAMPAIGN, {
    url: `campaigns`,
    method: 'post',
    data,
  });

export const archiveCampaignApi = ({
  id,
}: {
  id: string;
}): Generator<StrictEffect> =>
  handleRequest(ARCHIVE_CAMPAIGN_BY_ID, {
    url: `campaigns/${id}/archive`,
    method: 'get',
  });

export const deleteCampaignApi = ({
  id,
}: {
  id: string;
}): Generator<StrictEffect> =>
  handleRequest(DELETE_CAMPAIGN_BY_ID, {
    url: `campaigns/${id}`,
    method: 'delete',
  });
