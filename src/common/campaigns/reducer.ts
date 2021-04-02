import { DEFAULT_PAGE_SIZE } from '../../api/constants';

import {
  FETCH_CAMPAIGNS_LIST,
  FETCH_CAMPAIGNS_LIST_ERROR,
  FETCH_CAMPAIGNS_LIST_SUCCESS,
} from './constants';
import { CampaignActionTypes, CampaignsState } from './types';

export const initialState: CampaignsState = {
  isFetching: false,
  list: undefined,
  listPagination: {
    count: 0,
    current: 1,
    limit: DEFAULT_PAGE_SIZE,
    pages: 0,
  },
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
        list: action.payload.results,
        listPagination: {
          count: action.payload.count,
          current: action.payload.current,
          limit: action.payload.limit,
          pages: action.payload.pages,
        },
      };

    default:
      return state;
  }
};
