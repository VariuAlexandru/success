import {createAction, props} from "@ngrx/store";
import {ProfileInterface} from "./store.state.interface";


export const  ShowLoadingSpinner = createAction('[Spinner] Show loading spinner')
export const  HideLoadingSpinner = createAction('[Spinner] Hide loading spinner')



export const  GetProfile = createAction('[Shop] Get Profile')
export const  GetProfileSuccess = createAction('[Shop] Get Profile Success',
  props<{ profile: ProfileInterface}>()
)
export const  GetProfileFailure = createAction('[Shop] Get Profile Failed',
  props<{ error: string}>())
