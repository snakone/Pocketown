import { Component, OnInit } from '@angular/core';

import { StaticService } from '../../../services/static.service';

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
    this.stats = this.staticData.stats;
  }

  showStat(stat: string){
    this.staticData.selectedStat = stat;
    if (this.staticData.selectedType == "") this.staticData.selectedType = "Any";
  }

}
