import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppStateInterface} from "./store/store.state.interface";
import {GetProfile} from "./store/store.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  constructor (private store: Store<AppStateInterface>, private router: Router){

  }
  public ngOnInit(): void {
    this.store.dispatch(GetProfile())
    this.isLandingPage()
  }

  public isLandingPage() {
    return this.router.url === '/'
  }
}
