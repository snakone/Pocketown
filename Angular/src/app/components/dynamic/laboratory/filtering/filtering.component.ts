import { Component, OnInit, OnDestroy } from '@angular/core';

import { StaticService } from '../../../../services/static.service';  // Types Service

import { Router } from '@angular/router'; // Router

@Component({
  selector: 'filtering-message',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {

  constructor(private staticData: StaticService,
              private router : Router) { }

  ngOnInit() {
  }

  clear(){
    this.staticData.selectedType = "";
    this.staticData.selectedStat = "";
  }

  filter(){
    if (this.staticData.selectedStat == "") this.staticData.selectedStat = "Nº";
    this.router.navigate(["laboratory/result"]);
  }



}
