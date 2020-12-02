import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleFetchUsers } from '../../common/Users/actions';
import { usersListSelector } from '../../common/Users/selectors';
import { UserType } from '../../common/Users/types';

type UseUsersReturnType = {
  fetchUsers: () => void;
  usersList: UserType[];
};

const useUsers = (): UseUsersReturnType => {
  const dispatch = useDispatch();

  const usersList = useSelector(usersListSelector);

  const fetchUsers = useCallback(() => {
    dispatch(handleFetchUsers());
  }, []);

  return { fetchUsers, usersList };
};

export default useUsers;
