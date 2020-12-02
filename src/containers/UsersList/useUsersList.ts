import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleFetchUsers } from '../../common/users/actions';
import { usersListSelector } from '../../common/users/selectors';
import { UserType } from '../../common/users/types';

type UseUsersListReturnType = {
  fetchUsers: () => void;
  usersList: UserType[];
};

const useUsersList = (): UseUsersListReturnType => {
  const dispatch = useDispatch();

  const usersList = useSelector(usersListSelector);

  const fetchUsers = useCallback(() => {
    dispatch(handleFetchUsers());
  }, []);

  return { fetchUsers, usersList };
};

export default useUsersList;
