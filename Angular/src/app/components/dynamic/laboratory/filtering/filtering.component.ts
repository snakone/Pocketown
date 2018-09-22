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

  ngOnInit() {}

  clear(){  // Type, Stat and Evolution 0
    this.staticData.selectedType = "";
    this.staticData.selectedStat = "Nº";
    this.staticData.selectedEvolution = "Any";
    this.staticData.evolutionName = "Any";
  }

  filter(){
    this.router.navigate(["laboratory/result"]);  // Then go to Result
    // All Data; Type, Stat and Evolution are assigned now on the Service. Result will Load this Data.
  }

}

// This Component only shows when there's a selected TYPE, STAT or EVOLUTION. Contains the FILTER Button
