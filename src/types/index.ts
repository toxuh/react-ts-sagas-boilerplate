import { UserState } from '../common/users/types';

export type AnyObject = Record<string, unknown>;

export type GlobalState = {
  users: UserState;
};
