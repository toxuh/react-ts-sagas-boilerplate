import { combineReducers } from 'redux';

import dummyReducer from '../containers/Dummy/reducer';

export default combineReducers({
  dummy: dummyReducer,
});
