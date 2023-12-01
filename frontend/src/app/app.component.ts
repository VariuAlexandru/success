import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppStateInterface} from "./store/store.state.interface";
import {GetProfile} from "./store/store.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  constructor (private store: Store<AppStateInterface>){

  }
  public ngOnInit(): void {
    this.store.dispatch(GetProfile())
  }
}
