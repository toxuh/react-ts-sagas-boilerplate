import { combineReducers } from 'redux';

import campaignsReducer from '../common/campaigns/reducer';
import usersReducer from '../common/users/reducer';
import videoReducer from '../common/video/reducer';

export default combineReducers({
  campaigns: campaignsReducer,
  users: usersReducer,
  video: videoReducer,
});
