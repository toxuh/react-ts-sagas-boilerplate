export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS/SUCCESS';

export type UserType = {
  id: number;
  name: string;
};

export type UserState = {
  list: UserType[];
};

type FetchUsersListAction = {
  type: typeof FETCH_USERS;
};

type SuccessFetchUsersListAction = {
  type: typeof FETCH_USERS_SUCCESS;
  payload: UserType[];
};

export type UserActionTypes =
  | FetchUsersListAction
  | SuccessFetchUsersListAction;
