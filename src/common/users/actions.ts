import {
  CHECK_USER,
  CheckUserActionType,
  LOGIN_USER,
  LoginUserActionType,
  REGISTER_USER,
  RegisterUserActionType,
  UserLoginType,
  UserRegistrationType,
} from './types';

export const checkUserAction = (): CheckUserActionType => ({
  type: CHECK_USER,
});

export const registerUserAction = (
  payload: UserRegistrationType,
): RegisterUserActionType => ({
  type: REGISTER_USER,
  payload,
});

export const loginUserAction = (
  payload: UserLoginType,
): LoginUserActionType => ({
  type: LOGIN_USER,
  payload,
});
