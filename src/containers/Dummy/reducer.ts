import { ANOTHER_DUMMY_CONST, DummyActionTypes, DummyState } from './types';

export const initialState = {
  dummies: [],
};

export default (state = initialState, action: DummyActionTypes): DummyState => {
  switch (action.type) {
    case ANOTHER_DUMMY_CONST:
      return {
        dummies: [...state.dummies, ...action.payload],
      };

    default:
      return state;
  }
};
