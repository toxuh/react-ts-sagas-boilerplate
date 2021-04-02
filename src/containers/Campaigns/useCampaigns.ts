import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PaginationType } from '../../types/api';

import {
  archiveCampaignByIdAction,
  createNewCampaignAction,
  deleteCampaignByIdAction,
  fetchCampaignsListAction,
} from '../../common/campaigns/actions';
import {
  campaignsListPaginationSelector,
  campaignsListSelector,
  isCampaignsFetchingSelector,
} from '../../common/campaigns/selectors';
import {
  CampaignType,
  CreateNewCampaignType,
} from '../../common/campaigns/types';

type UseCampaignsReturnType = {
  archiveById: (id: string) => void;
  createNewCampaign: (data: CreateNewCampaignType) => void;
  deleteById: (id: string) => void;
  fetchCampaignsList: (page?: number) => void;
  isLoading: boolean;
  list: undefined | CampaignType[];
  pages: PaginationType;
};

const useCampaigns = (): UseCampaignsReturnType => {
  const dispatch = useDispatch();

  const isLoading = useSelector(isCampaignsFetchingSelector);
  const list = useSelector(campaignsListSelector);
  const pages = useSelector(campaignsListPaginationSelector);

  const fetchCampaignsList = useCallback(
    (page) => {
      dispatch(fetchCampaignsListAction(page));
    },
    [dispatch],
  );

  const createNewCampaign = useCallback(
    (data) => {
      dispatch(createNewCampaignAction(data));
    },
    [dispatch],
  );

  const archiveById = useCallback(
    (id: string) => {
      dispatch(archiveCampaignByIdAction({ id }));
    },
    [dispatch],
  );

  const deleteById = useCallback(
    (id: string) => {
      dispatch(deleteCampaignByIdAction({ id }));
    },
    [dispatch],
  );

  return {
    archiveById,
    createNewCampaign,
    deleteById,
    fetchCampaignsList,
    isLoading,
    list,
    pages,
  };
};

export default useCampaigns;
