import { combineReducers } from 'redux';
import todos from './todos';

/* if we had other reducers, would be added here */
export default combineReducers({
  todos,
});
