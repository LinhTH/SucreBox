import { PasswordListActionsUnion, PasswordListActionTypes } from './password-list.action';
import { initialPasswordListState, passwordListAdapter, PasswordListState } from './password-list.state';

export function passwordListReducer(
  state = initialPasswordListState,
  action: PasswordListActionsUnion
): PasswordListState {
    switch (action.type) {
      case PasswordListActionTypes.Load: {
        return {
          ...state,
          loaded: false,
          loading: true
        };
      }

      case PasswordListActionTypes.LoadComplete: {
        return passwordListAdapter.addMany(action.payload.passwordList, {
          ...state,
          loading: false,
          loaded: true
        });
      }

      default: {
        return state;
      }
    }
}
