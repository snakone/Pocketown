import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  appTitle: string;
  ngVersion: string;  // Angular Version
  appMail: string;  // Personal Mail

  logoURL: string;

  constructor(
            ) {
    this.appTitle = "Pocketown";
    this.ngVersion = "Angular 6";
    this.logoURL = "../../../../../assets/images/logo.png";
  }

  ngOnInit() {}

}
