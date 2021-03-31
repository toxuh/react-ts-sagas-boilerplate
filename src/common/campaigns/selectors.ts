import { createSelector } from 'reselect';

import { GlobalState } from '../../types';

import { UserState } from './types';

export const usersSelector = (state: GlobalState): UserState => state.users;

export const isRegistrationCompletedSelector = createSelector(
  usersSelector,
  (users) => users.registrationCompleted,
);

export const isLoggedSelector = createSelector(
  usersSelector,
  (users) => users.isLogged,
);

export const userSelector = createSelector(
  usersSelector,
  (users) => users.data,
);
