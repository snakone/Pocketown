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

  constructor() {

    this.appTitle = "Pocketown";
    this.ngVersion = "Angular 6";
    this.appMail = "mailto:sergio.martinez87.web@gmail.com?Subject=Angular%20Material";
    this.logoURL = "../../../../../assets/images/logo.png";
  }

  ngOnInit() {}

}
