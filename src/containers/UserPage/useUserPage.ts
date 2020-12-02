import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleFetchUserInfo } from '../../common/users/actions';
import { userSelector } from '../../common/users/selectors';
import { UserType } from '../../common/users/types';

type UseUserPage = {
  fetchUserData: (id: string) => void;
  user: UserType | undefined;
};

const useUserPage = (): UseUserPage => {
  const dispatch = useDispatch();

  const user = useSelector(userSelector);

  const fetchUserData = useCallback(
    (id) => {
      dispatch(handleFetchUserInfo(id));
    },
    [dispatch],
  );

  return { fetchUserData, user };
};

export default useUserPage;
