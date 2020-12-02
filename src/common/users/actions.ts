import {
  FETCH_USER,
  FETCH_USERS,
  FetchUserAction,
  FetchUsersListAction,
} from './types';

export const handleFetchUsers = (): FetchUsersListAction => ({
  type: FETCH_USERS,
});

export const handleFetchUserInfo = (id: string): FetchUserAction => ({
  type: FETCH_USER,
  payload: { id },
});
