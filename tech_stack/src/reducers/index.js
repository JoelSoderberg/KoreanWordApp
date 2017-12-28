import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Combine the two reducers into one
export default combineReducers({
  // Each reducer is assigned to a specific key.
  libraries: LibraryReducer,          // json Text information
  selectedLibraryId: SelectionReducer // Which text to expand (ID)
});
