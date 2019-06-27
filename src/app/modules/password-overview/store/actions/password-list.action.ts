import { PasswordInfo } from '../../../../core/models/password-info.model';
import { Action } from '@ngrx/store';

export enum PasswordListActionTypes {
  Load = '[PasswordList] Load',
  LoadComplete = '[PasswordList] Load Complete',
  AddPassword = '[PasswordList] Add Password'
}

export class Load implements Action {
  readonly type = PasswordListActionTypes.Load;
}

export class LoadComplete implements Action {
  readonly type = PasswordListActionTypes.LoadComplete;

  constructor(public payload: { passwordList: PasswordInfo[] }) {}
}

export class AddPassword implements Action {
  readonly type = PasswordListActionTypes.AddPassword;

  constructor(public payload: { newPassword: PasswordInfo }) {}
}

export type PasswordListActionsUnion = Load | LoadComplete | AddPassword;

export const PasswordListActions = {
  Load,
  LoadComplete,
  AddPassword
};
