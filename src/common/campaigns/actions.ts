import {
  ARCHIVE_CAMPAIGN_BY_ID,
  ArchiveCampaignByIdActionType,
  DELETE_CAMPAIGN_BY_ID,
  DeleteCampaignByIdActionType,
  FETCH_CAMPAIGNS_LIST,
  FetchCampaignsListActionType,
} from './types';

export const fetchCampaignsListAction = (): FetchCampaignsListActionType =>
  ({
    type: FETCH_CAMPAIGNS_LIST,
  } as const);

export const deleteCampaignByIdAction = ({
  id,
}: {
  id: number;
}): DeleteCampaignByIdActionType =>
  ({
    type: DELETE_CAMPAIGN_BY_ID,
    payload: id,
  } as const);

export const archiveCampaignByIdAction = ({
  id,
}: {
  id: number;
}): ArchiveCampaignByIdActionType =>
  ({
    type: ARCHIVE_CAMPAIGN_BY_ID,
    payload: id,
  } as const);
