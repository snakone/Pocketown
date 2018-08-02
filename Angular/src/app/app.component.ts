import { Component } from '@angular/core';


@Component({
  selector: 'app-pocketown',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;

  constructor(){
  this.title ="Pocketown";
  }
}
