import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AppActions from "./store.actions"
import {mergeMap, map, catchError, of} from "rxjs";
import {MockService} from "../services/mock.service";


@Injectable()
export class StoreEffects {
  constructor(private actions$: Actions, private mockService: MockService) {
  }
  getShop$ = createEffect(() =>
    this.actions$.pipe(ofType(AppActions.GetProfile),
      mergeMap(() => {
        return this.mockService.getProfile().pipe(
          map((response) => AppActions.GetProfileSuccess({profile: response})),
          catchError(error => of(AppActions.GetProfileFailure({error: error}))))
      }))
  )
}
