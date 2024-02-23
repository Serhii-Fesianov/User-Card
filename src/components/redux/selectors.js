import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users;

export const selectFilteredUsers = createSelector([selectUsers], users => {
  return users.filter(item => item.user.toLowerCase());
});
