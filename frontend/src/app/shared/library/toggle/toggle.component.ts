import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {


  public isToggled = false

  onToggle(){
    this.isToggled = !this.isToggled
  }
}
