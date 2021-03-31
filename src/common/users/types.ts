export const FETCH_CAMPAIGNS_LIST = 'FETCH_CAMPAIGNS_LIST';
export const FETCH_CAMPAIGNS_LIST_SUCCESS = 'FETCH_CAMPAIGNS_LIST/SUCCESS';
export const FETCH_CAMPAIGNS_LIST_ERROR = 'FETCH_CAMPAIGNS_LIST/ERROR';

export type UserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
};

export type UserRegistrationType = {
  email: string;
  username: string;
  password: string;
};

export type UserLoginType = {
  email: string;
  password: string;
};

export type TokenType = {
  token: string;
};

export type UserState = {
  registrationCompleted: boolean;
  isLogged: boolean;
  data: UserType | undefined;
};

export type FetchUserDataActionType = {
  type: typeof FETCH_USER_DATA;
};

export type UserActionTypes = FetchUserDataActionType;
