import {
  ARCHIVE_CAMPAIGN_BY_ID,
  CREATE_NEW_CAMPAIGN,
  DELETE_CAMPAIGN_BY_ID,
  FETCH_CAMPAIGNS_LIST,
} from './constants';
import {
  ArchiveCampaignByIdActionType,
  CreateNewCampaignActionType,
  CreateNewCampaignType,
  DeleteCampaignByIdActionType,
  FetchCampaignsListActionType,
} from './types';

export const fetchCampaignsListAction = (
  page?: number,
): FetchCampaignsListActionType =>
  ({
    type: FETCH_CAMPAIGNS_LIST,
    payload: {
      page,
    },
  } as const);

export const createNewCampaignAction = (
  data: CreateNewCampaignType,
): CreateNewCampaignActionType =>
  ({
    type: CREATE_NEW_CAMPAIGN,
    payload: data,
  } as const);

export const deleteCampaignByIdAction = ({
  id,
}: {
  id: string;
}): DeleteCampaignByIdActionType =>
  ({
    type: DELETE_CAMPAIGN_BY_ID,
    payload: id,
  } as const);

export const archiveCampaignByIdAction = ({
  id,
}: {
  id: string;
}): ArchiveCampaignByIdActionType =>
  ({
    type: ARCHIVE_CAMPAIGN_BY_ID,
    payload: id,
  } as const);
