import { AppState } from './../../../core/store/reducer';
import { createSelector } from '@ngrx/store';

import { passwordListAdapter, PasswordListState } from './password-list.state';

function selectPasswordListState(state: AppState): PasswordListState {
  return state.passwordList;
}

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
         getPasswordListLoading: getPasswordListLoading,
         getPasswordListLoaded: getPasswordListLoaded,
         getPasswordList: getPasswordList
       };
