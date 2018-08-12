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

  clear(){  // Type, Stat and Evolution 0
    this.staticData.selectedType = "";
    this.staticData.selectedStat = "";
    this.staticData.selectedEvolution = "";
    this.staticData.evolutionName = "Any";
  }

  filter(){
    this.router.navigate(["laboratory/result"]);  // Then go to Result
  }



}