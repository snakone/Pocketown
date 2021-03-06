import { Component, OnInit } from '@angular/core';

import { StaticService } from '../../../services/static.service';

import { Router } from '@angular/router'; // Routes

@Component({
  selector: 'pokemon-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  types: string[];

  constructor(private staticData: StaticService,
              private router : Router,) {}

  ngOnInit() {
    this.types = this.staticData.types;  // Get the Types List
  }

  showType(type: string){
    this.staticData.selectedType = type;  // Assing the selectedType to the Service
  }

}

// PlaceHolder Component to Display Pokemon Types. On Click the selected Type is assigned to the Service.
