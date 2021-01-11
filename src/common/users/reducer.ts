import {
  FETCH_USER_DATA_SUCCESS,
  REGISTER_USER_SUCCESS,
  TOGGLE_LOGIN,
  UserActionTypes,
  UserState,
} from './types';

export const initialState: UserState = {
  registrationCompleted: false,
  isLogged: false,
  data: undefined,
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLogged: true,
      };

    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        isLogged: true,
        data: action.payload,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registrationCompleted: true,
      };

    default:
      return state;
  }
};
