import { createSelector } from 'reselect';

import { GlobalState } from '../../types';

import { VideoState } from './types';

export const videoSelector = (state: GlobalState): VideoState => state.video;

export const videoInfoSelector = createSelector(
  videoSelector,
  (video) => video.data,
);

export const isFetchingErrorSelector = createSelector(
  videoSelector,
  (video) => video.error,
);

export const isLoadingSelector = createSelector(
  videoSelector,
  (video) => video.isLoading,
);
