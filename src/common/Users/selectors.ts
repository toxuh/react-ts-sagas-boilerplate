import { createSelector } from 'reselect';

import { GlobalState } from '../../types';

import { UserState } from './types';

export const usersSelector = (state: GlobalState): UserState => state.users;

export const usersListSelector = createSelector(
  usersSelector,
  (users) => users.list,
);
