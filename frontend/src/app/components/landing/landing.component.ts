import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent  {

  public title = 'Move Mountains'

  public quote =  {
    desc :"'' If you think you can or if you think you can't, either way your right. ''",
    author: 'Henry Ford'
  }





}
