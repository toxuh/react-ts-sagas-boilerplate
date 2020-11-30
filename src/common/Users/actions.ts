import { FETCH_USERS, UserActionTypes } from './types';

/* eslint-disable-next-line */
export const handleFetchUsers = (): UserActionTypes => ({
  type: FETCH_USERS,
});
