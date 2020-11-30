import { FETCH_USERS_SUCCESS, UserActionTypes, UserState } from './types';

export const initialState = {
  list: [],
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        list: [...state.list, ...action.payload],
      };

    default:
      return state;
  }
};
