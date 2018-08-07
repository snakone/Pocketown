import { Component, OnInit } from '@angular/core';

import { FilterService } from '../../../services/filter.service';  // Pokedex Service

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  constructor(private filter: FilterService) { }

  ngOnInit() {

  }

}
