import { UserState } from '../common/Users/types';

export type AnyObject = Record<string, unknown>;

export type GlobalState = {
  users: UserState;
};
