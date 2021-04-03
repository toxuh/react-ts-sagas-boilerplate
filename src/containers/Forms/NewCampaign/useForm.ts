import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchVideoInfoAction } from '../../../common/video/actions';
import {
  isFetchingErrorSelector,
  isLoadingSelector,
  videoInfoSelector,
} from '../../../common/video/selectors';
import { VideoType } from '../../../common/video/types';

export type Type = {
  isError: boolean;
  isFetching: boolean;
  data: undefined | VideoType;
  fetchVideoInfo: (link: string) => void;
};

const useForm = (): Type => {
  const dispatch = useDispatch();

  const isError = useSelector(isFetchingErrorSelector);
  const isFetching = useSelector(isLoadingSelector);
  const data = useSelector(videoInfoSelector);

  const fetchVideoInfo = useCallback(
    (link: string) => {
      const params = new URLSearchParams(link.split('?')[1]);
      dispatch(fetchVideoInfoAction(params.get('v') as string));
    },
    [dispatch],
  );

  return {
    isError,
    isFetching,
    data,
    fetchVideoInfo,
  };
};

export default useForm;
