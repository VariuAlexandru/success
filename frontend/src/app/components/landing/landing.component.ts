import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public counter = 99;

  public ngOnInit(){
    this.startCounting()
  }

  public startCounting(){
    console.log(this.counter)
    if(this.counter > 1) {

      this.counter = this.counter -1
      setTimeout(() => this.startCounting(), 20);
    }

  }

}
