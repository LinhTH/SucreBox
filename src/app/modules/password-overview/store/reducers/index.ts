import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { PasswordListState } from './password-list.state';
import { passwordListReducer } from './password-list.reducer';

export const FEATURE_STORE_NAME = 'passwordOverview';

export interface PasswordOverviewState {
  passwordList: PasswordListState;
}

export const passwordOverviewReducers: ActionReducerMap<PasswordOverviewState> = {
    passwordList: passwordListReducer
};

export const getPasswordOverviewState = createFeatureSelector<PasswordOverviewState>(FEATURE_STORE_NAME);
