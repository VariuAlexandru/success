import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreEffects} from "./store/store.effects";
import {appState} from "./store/store.reducers";
import { TodayComponent } from './components/today/today.component';
import {SharedModule} from "./shared/shared.module";
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TodayComponent,
    TaskComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        EffectsModule.forRoot([StoreEffects]),
        StoreModule.forRoot({appState}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            connectOutsideZone: true
        }),
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
