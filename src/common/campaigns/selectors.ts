import { createSelector } from 'reselect';

import { GlobalState } from '../../types';

import { CampaignsState } from './types';

export const campaignsSelector = (state: GlobalState): CampaignsState =>
  state.campaigns;

export const isCampaignsFetchingSelector = createSelector(
  campaignsSelector,
  (campaigns) => campaigns.isFetching,
);

export const campaignsListSelector = createSelector(
  campaignsSelector,
  (campaigns) => campaigns.list,
);

export const campaignsListPaginationSelector = createSelector(
  campaignsSelector,
  (campaigns) => campaigns.listPagination,
);
