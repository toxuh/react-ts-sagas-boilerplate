import { createSelector } from 'reselect';

import { GlobalState } from '../../types';

import { DummyState } from './types';

export const dummySelector = (state: GlobalState): DummyState => state.dummy;

export const dummiesSelector = createSelector(
  dummySelector,
  (dummy) => dummy.dummies,
);
