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
    this.staticData.selectedStat = stat;  // Assing the selected Stat to the Service
  }

}

// PlaceHolder Component to Display Pokemon Stats. On Click the selected Stats is assigned to the Service.
