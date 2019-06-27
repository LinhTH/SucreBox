import { createSelector } from '@ngrx/store';

import { getPasswordOverviewState } from '../reducers';
import { passwordListAdapter, PasswordListState } from '../reducers/password-list.state';
import { PasswordOverviewState } from './../reducers';

export const selectPasswordListState = createSelector(
  getPasswordOverviewState,
  (state: PasswordOverviewState) => state.passwordList
);

export const getPasswordListLoading = createSelector(
  selectPasswordListState,
  (state: PasswordListState) => state.loading
);

export const getPasswordListLoaded = createSelector(
  selectPasswordListState,
  (state: PasswordListState) => state.loaded
);

export const { selectAll: getPasswordList } = passwordListAdapter.getSelectors(
  selectPasswordListState
);

export const PasswordListSelector = {
  getPasswordListLoading,
  getPasswordListLoaded,
  getPasswordList
};
