import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { InputComponent } from './library/input/input.component';
import { ToggleComponent } from './library/toggle/toggle.component';
import { DropdownComponent } from './library/dropdown/dropdown.component';



@NgModule({
  declarations: [
    NavComponent,
    InputComponent,
    ToggleComponent,
    DropdownComponent
  ],
  exports: [
    NavComponent,
    ToggleComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
