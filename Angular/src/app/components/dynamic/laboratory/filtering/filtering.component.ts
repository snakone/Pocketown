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

  clear(){  // Type and Stat 0
    this.staticData.selectedType = "";
    this.staticData.selectedStat = "";
  }

  filter(){
    if (this.staticData.selectedStat == "")  // Check if We have Stat
    this.staticData.selectedStat = "Nº"; // No Stat? -> sort by Pokedex Nº

    this.router.navigate(["laboratory/result"]);  // Then go to Result
  }



}
