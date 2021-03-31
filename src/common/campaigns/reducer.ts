import {
  CampaignActionTypes,
  CampaignType,
  CampaignsState,
  FETCH_CAMPAIGNS_LIST,
  FETCH_CAMPAIGNS_LIST_ERROR,
  FETCH_CAMPAIGNS_LIST_SUCCESS,
} from './types';

import mock from './mock';

export const initialState: CampaignsState = {
  isFetching: false,
  list: mock as CampaignType[],
};

export default (
  state = initialState,
  action: CampaignActionTypes,
): CampaignsState => {
  switch (action.type) {
    case FETCH_CAMPAIGNS_LIST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_CAMPAIGNS_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_CAMPAIGNS_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };

    default:
      return state;
  }
};
