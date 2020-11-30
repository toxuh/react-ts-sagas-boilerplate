import { combineReducers } from 'redux';

import usersReducer from '../common/Users/reducer';

export default combineReducers({
  users: usersReducer,
});
