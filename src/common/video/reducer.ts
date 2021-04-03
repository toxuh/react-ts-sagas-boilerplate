import {
  FETCH_VIDEO_INFO,
  FETCH_VIDEO_INFO_ERROR,
  FETCH_VIDEO_INFO_SUCCESS,
} from './constants';

import { VideoActionTypes, VideoState } from './types';

const initialState: VideoState = {
  data: undefined,
  error: false,
  isLoading: false,
};

export default (state = initialState, action: VideoActionTypes): VideoState => {
  switch (action.type) {
    case FETCH_VIDEO_INFO:
      return {
        ...initialState,
        isLoading: true,
      };

    case FETCH_VIDEO_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload.data.items[0].snippet,
        isLoading: false,
      };

    case FETCH_VIDEO_INFO_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
