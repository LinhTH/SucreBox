import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { PasswordInfo } from '../../../core/models/password-info.model';

export interface PasswordListState extends EntityState<PasswordInfo> {
  loaded: boolean;
  loading: boolean;
}

export const passwordListAdapter: EntityAdapter<
  PasswordInfo
> = createEntityAdapter<PasswordInfo>({
  selectId: (passwordInfo: PasswordInfo) => String(passwordInfo.createdAt),
  sortComparer: false
});

export const initialPasswordListState: PasswordListState = passwordListAdapter.getInitialState(
  {
    loaded: false,
    loading: false
  }
);
