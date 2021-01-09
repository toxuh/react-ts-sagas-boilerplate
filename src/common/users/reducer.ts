import { CHECK_USER_SUCCESS, UserActionTypes, UserState } from './types';

export const initialState: UserState = {
  isLogged: false,
  data: undefined,
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case CHECK_USER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        data: action.payload,
      };

    default:
      return state;
  }
};
