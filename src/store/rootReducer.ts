import { combineReducers } from 'redux';

import usersReducer from '../common/users/reducer';

export default combineReducers({
  users: usersReducer,
});
