export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA/SUCCESS';
export const FETCH_USER_DATA_ERROR = 'FETCH_USER_DATA/ERROR';

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER/SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER/ERROR';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER/SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER/ERROR';

export type UserType = {
  username: string;
  firstName: null | string;
  lastName: null | string;
  gender: null | string;
  yearOfBirth: null | string;
  timezone: null | string;
  interests: string;
  level: number;
  credits: number;
  sessions: number;
  settings2Factor: boolean;
  settingsNightMode: boolean;
  settingsAnonymizeUsername: boolean;
  id: number;
  email: string;
};

export type UserRegistrationType = {
  email: string;
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

type SuccessFetchUserDataActionType = {
  type: typeof FETCH_USER_DATA_SUCCESS;
  payload: UserType;
};

type ErrorFetchUserDataActionType = {
  type: typeof FETCH_USER_DATA_ERROR;
};

export type RegisterUserActionType = {
  type: typeof REGISTER_USER;
  payload: UserRegistrationType;
};

type SuccessRegisterUserActionType = {
  type: typeof REGISTER_USER_SUCCESS;
};

type ErrorRegisterUserActionType = {
  type: typeof REGISTER_USER_ERROR;
};

export type LoginUserActionType = {
  type: typeof LOGIN_USER;
  payload: UserLoginType;
};

type SuccessLoginUserActionType = {
  type: typeof LOGIN_USER_SUCCESS;
  payload: TokenType;
};

type ErrorLoginUserActionType = {
  type: typeof LOGIN_USER_ERROR;
};

export type ToggleLoginActionType = {
  type: typeof TOGGLE_LOGIN;
  payload: boolean;
};

export type UserActionTypes =
  | FetchUserDataActionType
  | SuccessFetchUserDataActionType
  | ErrorFetchUserDataActionType
  | RegisterUserActionType
  | SuccessRegisterUserActionType
  | ErrorRegisterUserActionType
  | LoginUserActionType
  | SuccessLoginUserActionType
  | ErrorLoginUserActionType
  | ToggleLoginActionType;
