import { Component } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent {

  public title = 'Craft your future'

  public quote =  {
    desc :"'' You can have more than you got, because you can become more than you are. ''",
    author: 'Jim Rohn'
  }

  public tasks: any = [];
}
