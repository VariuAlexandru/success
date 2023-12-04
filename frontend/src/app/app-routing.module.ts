import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {TodayComponent} from "./components/today/today.component";
import {TaskComponent} from "./components/task/task.component";

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'today', component: TodayComponent},
  { path: 'task', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
