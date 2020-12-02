import {
  FETCH_USERS_SUCCESS,
  FETCH_USER_SUCCESS,
  UserActionTypes,
  UserState,
} from './types';

export const initialState: UserState = {
  list: [],
  user: undefined,
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...action.payload],
      };

    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
      };
    }

    default:
      return state;
  }
};
