import { PaginationType } from '../../types/api';

import * as constants from './constants';

export type CampaignStatusTypes =
  | 'new'
  | 'archived'
  | 'progress'
  | 'paused'
  | 'success';

export type CampaignTypeTypes = 'views' | 'likes' | 'subscribers' | 'comments';

export type CampaignType = {
  archived: boolean;
  created: string;
  id: string;
  progress: number;
  started: null | string;
  status: CampaignStatusTypes;
  thumbnail: string;
  title: string;
  total: number;
  type: CampaignTypeTypes;
};

export type CreateNewCampaignType = {
  channelId: string;
  channelTitle: string;
  description: string;
  duration: number;
  link: string;
  videoPublishDate: string;
  thumbnail: string;
  title: string;
  total: number;
  type: CampaignTypeTypes;
};

export type CampaignsState = {
  isFetching: boolean;
  list: CampaignType[] | undefined;
  listPagination: PaginationType;
};

export type FetchCampaignsListActionType = {
  type: typeof constants.FETCH_CAMPAIGNS_LIST;
  payload: {
    page?: number;
  };
};

export type FetchCampaignsListSuccessActionType = {
  type: typeof constants.FETCH_CAMPAIGNS_LIST_SUCCESS;
  payload: { results: CampaignType[] } & PaginationType;
};

export type FetchCampaignsListErrorActionType = {
  type: typeof constants.FETCH_CAMPAIGNS_LIST_ERROR;
};

export type FetchArchivedCampaignsListActionType = {
  type: typeof constants.FETCH_ARCHIVED_CAMPAIGNS_LIST;
};

export type FetchArchivedCampaignsListSuccessActionType = {
  type: typeof constants.FETCH_ARCHIVED_CAMPAIGNS_LIST_SUCCESS;
  payload: { results: CampaignType[] } & PaginationType;
};

export type FetchArchivedCampaignsListErrorActionType = {
  type: typeof constants.FETCH_ARCHIVED_CAMPAIGNS_LIST_ERROR;
};

export type CreateNewCampaignActionType = {
  type: typeof constants.CREATE_NEW_CAMPAIGN;
  payload: CreateNewCampaignType;
};

export type DeleteCampaignByIdActionType = {
  type: typeof constants.DELETE_CAMPAIGN_BY_ID;
  payload: string;
};

export type ArchiveCampaignByIdActionType = {
  type: typeof constants.ARCHIVE_CAMPAIGN_BY_ID;
  payload: string;
};

export type CampaignActionTypes =
  | FetchArchivedCampaignsListActionType
  | FetchArchivedCampaignsListSuccessActionType
  | FetchArchivedCampaignsListErrorActionType
  | FetchCampaignsListActionType
  | FetchCampaignsListErrorActionType
  | FetchCampaignsListSuccessActionType
  | DeleteCampaignByIdActionType
  | ArchiveCampaignByIdActionType
  | CreateNewCampaignActionType;
