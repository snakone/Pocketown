import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.css']
})
export class FixedNavComponent implements OnInit {

  navTitles: string[];

  constructor() {
    this.navTitles = ["Data","Tools","Guides", "Game"];
  }

  ngOnInit() {
  }

}
