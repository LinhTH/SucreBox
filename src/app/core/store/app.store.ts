import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

// tslint:disable-next-line:no-empty-interface
interface AppState {
}

const appReducers: ActionReducerMap<AppState> = {
};

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return (state: AppState, action: Action): AppState => {
        // if (action.type === 'abc') { // TODO: Use correct Type
        //     state = undefined;
        // }
        return reducer(state, action);
    };
}

const metaReducers: MetaReducer<AppState>[] = [clearState];

export { AppState, appReducers, metaReducers};
