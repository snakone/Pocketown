import { Component, OnInit, OnDestroy } from '@angular/core';

import { TypesService } from '../../../../services/types.service';  // Types Service

import { Router } from '@angular/router'; // Router

@Component({
  selector: 'filtering-message',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {

  constructor(private typeService: TypesService,
              private router : Router) { }

  ngOnInit() {
  }

  clear(){
    this.typeService.selectedType = "Any";
    this.typeService.selectedStat = "Pokédex Nº";
  }

  filter(){
    this.router.navigate(["laboratory/result"]);
  }



}
