import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  archiveCampaignByIdAction,
  deleteCampaignByIdAction,
  fetchCampaignsListAction,
} from '../../common/campaigns/actions';
import {
  campaignsListSelector,
  isCampaignsFetchingSelector,
} from '../../common/campaigns/selectors';
import { CampaignType } from '../../common/campaigns/types';

type UseCampaignsReturnType = {
  archiveById: (id: number) => void;
  bootstrap: () => void;
  deleteById: (id: number) => void;
  isLoading: boolean;
  list: undefined | CampaignType[];
};

const useCampaigns = (): UseCampaignsReturnType => {
  const dispatch = useDispatch();

  const isLoading = useSelector(isCampaignsFetchingSelector);
  const list = useSelector(campaignsListSelector);

  const bootstrap = useCallback(() => {
    dispatch(fetchCampaignsListAction());
  }, [dispatch]);

  const archiveById = useCallback(
    (id: number) => {
      dispatch(archiveCampaignByIdAction({ id }));
    },
    [dispatch],
  );

  const deleteById = useCallback(
    (id: number) => {
      dispatch(deleteCampaignByIdAction({ id }));
    },
    [dispatch],
  );

  return { archiveById, bootstrap, deleteById, isLoading, list };
};

export default useCampaigns;
