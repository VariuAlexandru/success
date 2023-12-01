import {createReducer, on} from "@ngrx/store";
import * as Actions from './store.actions'
import {AppStateInterface} from "./store.state.interface";


export const initialState: AppStateInterface = {
  spinner: false,
  profile: null,
}
export const appState = createReducer(
  initialState,
  // loading spinner
  on(Actions.ShowLoadingSpinner, state => ({...state, spinner: true})),
  on(Actions.HideLoadingSpinner, state => ({...state, spinner: false})),

  on(Actions.GetProfile, state => ({...state, spinner: true})),
  on(Actions.GetProfileSuccess, (state, action) => ({...state,spinner: false, profile: action.profile})),
  on(Actions.GetProfileFailure, state => ({...state, spinner: false})),
);
