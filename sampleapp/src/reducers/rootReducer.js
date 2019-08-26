// @flow
import { combineReducers } from 'redux';

// constants
import { LOG_OUT } from 'constants/authConstants';

// reducers
import navigationReducer from './navigationReducer';
import userReducer from './userReducer';
import accessTokensReducer from './accessTokensReducer';
import sessionReducer from './sessionReducer';

const appReducer = combineReducers({
  navigation: navigationReducer,
  user: userReducer,
  accessTokens: accessTokensReducer,
  session: sessionReducer,
});

const initialState = appReducer(undefined, {});

const rootReducer = (state: Object, action: Object) => {
  if (action.type === LOG_OUT) {
    return initialState;
  }
  return appReducer(state, action);
};

export default rootReducer;
