import { Component, OnInit } from '@angular/core';

import { StaticService } from '../../../services/static.service';  // Static Service

@Component({
  selector: 'pokemon-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats: string[];
  selectedStat: string;

  constructor(private staticData: StaticService) {}

  ngOnInit() {
    this.stats = this.staticData.stats;  // Get the Stats List
  }

  showStat(stat: string){

    this.staticData.selectedStat = stat;



    if (this.staticData.selectedType == "") // No Type selected? -> Any
    this.staticData.selectedType = "Any";

  }

}
