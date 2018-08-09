import { Component, OnInit } from '@angular/core';

import { TypesService } from '../../../services/types.service';

@Component({
  selector: 'pokemon-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats: string[];
  selectedStat: string;

  constructor(private typeService: TypesService) {}

  ngOnInit() {
    this.stats = this.typeService.stats;
  }

  showStat(stat: string){
    this.typeService.selectedStat = stat;
  }

}
