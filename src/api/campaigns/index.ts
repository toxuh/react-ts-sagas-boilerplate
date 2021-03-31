import { StrictEffect } from 'redux-saga/effects';

import handleRequest from '../utils/handleRequest';

import {
  ARCHIVE_CAMPAIGN_BY_ID,
  DELETE_CAMPAIGN_BY_ID,
  FETCH_CAMPAIGNS_LIST,
} from '../../common/campaigns/types';

export const fetchCampaignsListApi = (): Generator<StrictEffect> =>
  handleRequest(FETCH_CAMPAIGNS_LIST, {
    url: 'campaigns',
    method: 'get',
  });

export const archiveCampaignApi = ({
  id,
}: {
  id: number;
}): Generator<StrictEffect> =>
  handleRequest(ARCHIVE_CAMPAIGN_BY_ID, {
    url: `campaigns/archive`,
    method: 'post',
    data: { id },
  });

export const deleteCampaignApi = ({
  id,
}: {
  id: number;
}): Generator<StrictEffect> =>
  handleRequest(DELETE_CAMPAIGN_BY_ID, {
    url: `campaigns/${id}`,
    method: 'delete',
  });
