import { PasswordInfo } from './../../../core/models/password-info.model';
import { Action } from '@ngrx/store';

export enum PasswordListActionTypes {
  Load = '[PasswordList] Load',
  LoadComplete = '[PasswordList] Load Complete'
}

export class Load implements Action {
  readonly type = PasswordListActionTypes.Load;
}

export class LoadComplete implements Action {
  readonly type = PasswordListActionTypes.LoadComplete;

  constructor(public payload: { passwordList: PasswordInfo[] }) {}
}

export type PasswordListActionsUnion = Load | LoadComplete;

export const PasswordListActions = {
  Load,
  LoadComplete
};
