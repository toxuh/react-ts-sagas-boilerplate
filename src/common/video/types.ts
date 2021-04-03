import {
  FETCH_VIDEO_INFO,
  FETCH_VIDEO_INFO_ERROR,
  FETCH_VIDEO_INFO_SUCCESS,
} from './constants';

export type VideoType = {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: {
    default: {
      height: number;
      url: string;
      width: number;
    };
    high: {
      height: number;
      url: string;
      width: number;
    };
    medium: {
      height: number;
      url: string;
      width: number;
    };
  };

  title: string;
};

export type VideoState = {
  data: undefined | VideoType;
  error: boolean;
  isLoading: boolean;
};

export type FetchVideoInfoActionType = {
  type: typeof FETCH_VIDEO_INFO;
  payload: string;
};

export type FetchVideoInfoSuccessActionType = {
  type: typeof FETCH_VIDEO_INFO_SUCCESS;
  payload: {
    data: {
      items: {
        snippet: VideoType;
      }[];
    };
  };
};

export type FetchVideoInfoErrorActionType = {
  type: typeof FETCH_VIDEO_INFO_ERROR;
};

export type VideoActionTypes =
  | FetchVideoInfoActionType
  | FetchVideoInfoSuccessActionType
  | FetchVideoInfoErrorActionType;
