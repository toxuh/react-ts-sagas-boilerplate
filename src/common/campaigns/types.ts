export const FETCH_CAMPAIGNS_LIST = 'FETCH_CAMPAIGNS_LIST';
export const FETCH_CAMPAIGNS_LIST_SUCCESS = 'FETCH_CAMPAIGNS_LIST/SUCCESS';
export const FETCH_CAMPAIGNS_LIST_ERROR = 'FETCH_CAMPAIGNS_LIST/ERROR';

export const DELETE_CAMPAIGN_BY_ID = 'DELETE_CAMPAIGN_BY_ID';
export const DELETE_CAMPAIGN_BY_ID_SUCCESS = 'DELETE_CAMPAIGN_BY_ID/SUCCESS';
export const DELETE_CAMPAIGN_BY_ID_ERROR = 'DELETE_CAMPAIGN_BY_ID/ERROR';

export const ARCHIVE_CAMPAIGN_BY_ID = 'ARCHIVE_CAMPAIGN_BY_ID';
export const ARCHIVE_CAMPAIGN_BY_ID_SUCCESS = 'ARCHIVE_CAMPAIGN_BY_ID/SUCCESS';
export const ARCHIVE_CAMPAIGN_BY_ID_ERROR = 'ARCHIVE_CAMPAIGN_BY_ID/ERROR';

export type CampaignType = {
  id: number;
  name: string;
  progress: number;
  startedAt: string;
  status: undefined | 'archived' | 'progress' | 'paused' | 'success';
  total: number;
};

export type CampaignsState = {
  isFetching: boolean;
  list: CampaignType[] | undefined;
};

export type FetchCampaignsListActionType = {
  type: typeof FETCH_CAMPAIGNS_LIST;
};

export type FetchCampaignsListSuccessActionType = {
  type: typeof FETCH_CAMPAIGNS_LIST_SUCCESS;
  payload: CampaignType[];
};

export type FetchCampaignsListErrorActionType = {
  type: typeof FETCH_CAMPAIGNS_LIST_ERROR;
};

export type DeleteCampaignByIdActionType = {
  type: typeof DELETE_CAMPAIGN_BY_ID;
  payload: number;
};

export type ArchiveCampaignByIdActionType = {
  type: typeof ARCHIVE_CAMPAIGN_BY_ID;
  payload: number;
};

export type CampaignActionTypes =
  | FetchCampaignsListActionType
  | FetchCampaignsListErrorActionType
  | FetchCampaignsListSuccessActionType
  | DeleteCampaignByIdActionType
  | ArchiveCampaignByIdActionType;
