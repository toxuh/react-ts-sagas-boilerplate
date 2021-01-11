import {
  FETCH_USER_DATA,
  FetchUserDataActionType,
  LOGIN_USER,
  LoginUserActionType,
  REGISTER_USER,
  RegisterUserActionType,
  TOGGLE_LOGIN,
  ToggleLoginActionType,
  UserLoginType,
  UserRegistrationType,
} from './types';

export const fetchUserDataAction = (): FetchUserDataActionType => ({
  type: FETCH_USER_DATA,
});

export const registerUserAction = (
  payload: UserRegistrationType,
): RegisterUserActionType =>
  ({
    type: REGISTER_USER,
    payload,
  } as const);

export const loginUserAction = (payload: UserLoginType): LoginUserActionType =>
  ({
    type: LOGIN_USER,
    payload,
  } as const);

export const toggleLogin = (payload: boolean): ToggleLoginActionType =>
  ({
    type: TOGGLE_LOGIN,
    payload,
  } as const);
