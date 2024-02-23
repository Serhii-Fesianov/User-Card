import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersSliceReducer } from './user.slice';

const rootReducer = combineReducers({
  users: usersSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
