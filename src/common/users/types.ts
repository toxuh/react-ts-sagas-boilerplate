export const CHECK_USER = 'CHECK_USER';
export const CHECK_USER_SUCCESS = 'CHECK_USER/SUCCESS';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER/SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER/ERROR';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER/SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER/ERROR';

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
  isLogged: boolean;
  data: UserType | undefined;
};

export type CheckUserActionType = {
  type: typeof CHECK_USER;
};

type SuccessCheckUserActionType = {
  type: typeof CHECK_USER_SUCCESS;
  payload: UserType;
};

export type RegisterUserActionType = {
  type: typeof REGISTER_USER;
  payload: UserRegistrationType;
};

type SuccessRegisterUserActionType = {
  type: typeof REGISTER_USER_SUCCESS;
  payload: UserType;
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

export type UserActionTypes =
  | CheckUserActionType
  | SuccessCheckUserActionType
  | RegisterUserActionType
  | SuccessRegisterUserActionType
  | ErrorRegisterUserActionType
  | LoginUserActionType
  | SuccessLoginUserActionType
  | ErrorLoginUserActionType;
