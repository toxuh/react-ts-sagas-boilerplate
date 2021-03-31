import { combineReducers } from 'redux';

import campaignsReducer from '../common/campaigns/reducer';
import usersReducer from '../common/users/reducer';

export default combineReducers({
  campaigns: campaignsReducer,
  users: usersReducer,
});
