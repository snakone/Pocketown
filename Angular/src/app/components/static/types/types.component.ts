import { Component, OnInit } from '@angular/core';

import { TypesService } from '../../../services/types.service';
import { FilterService } from '../../../services/filter.service';

import { Router } from '@angular/router'; // Routes

@Component({
  selector: 'pokemon-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  types: string[];

  constructor(private typeService: TypesService,
              private filter: FilterService,
              private router : Router,) {}

  ngOnInit() {
    this.types = this.typeService.types;
  }

  onFilter(type: string){
    this.typeService.selectedType = type;
    this.router.navigate(["laboratory/result"]);
  }

}
