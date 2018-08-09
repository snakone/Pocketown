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
    this.types = this.staticData.types;
  }

  showType(type: string){
    this.staticData.selectedType = type;
  }

}
