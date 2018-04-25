import { combineReducers } from 'redux';
import names from './namesReducer';

const rootReducer = combineReducers({
  names
});

export default rootReducer;