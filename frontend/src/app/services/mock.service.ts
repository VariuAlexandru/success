import { Injectable } from '@angular/core';
import {delay, Observable, of, Subject} from "rxjs";
import {ProfileInterface, UserTypesEnum} from "../store/store.state.interface";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  public profile: ProfileInterface = {
    id: 'abc123',
    userType: UserTypesEnum.user,
    signedIn: true
  }

  constructor() { }

  getProfile(): Observable<ProfileInterface> {
    return of(this.profile).pipe(delay(1200))
  }



}
