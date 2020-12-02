// TODO: Need successType() function

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS/SUCCESS';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER/SUCCESS';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type UserState = {
  list: UserType[];
  user: UserType | undefined;
};

export type FetchUsersListAction = {
  type: typeof FETCH_USERS;
};

type SuccessFetchUsersListAction = {
  type: typeof FETCH_USERS_SUCCESS;
  payload: UserType[];
};

export type FetchUserAction = {
  type: typeof FETCH_USER;
  payload: {
    id: string;
  };
};

type SuccessFetchUserAction = {
  type: typeof FETCH_USER_SUCCESS;
  payload: UserType;
};

export type UserActionTypes =
  | FetchUsersListAction
  | SuccessFetchUsersListAction
  | FetchUserAction
  | SuccessFetchUserAction;
