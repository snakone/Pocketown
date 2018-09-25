import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../../../models/trainer';  // Trainer Model
import { Pokemon } from '../../../../../models/pokemon';  // Trainer Model

@Component({
  selector: 'profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.css']
})
export class ProfileStatsComponent implements OnInit {

  totalSS: number;  // Total SS of Trainer Team
  totalHP: number;
  totalATK: number;
  totalDEF: number;
  totalSATK: number;
  totalSDEF: number;
  totalSPD: number;
  totalSSRate: number;
  max:number;

  recommenedPower: number;
  rate: number = 0.0200080032;  // 4998/100 Where 4998 is Max Pokemon SS * 6 (Progress bar MAX value is 100)

  urlImage: string;
  trainer: Trainer;

  constructor(private trainerService: TrainerService) {
        this.urlImage = "../../../../../../assets/icons/";
   }

  ngOnInit() {
    this.trainerService.getFireTrainerbyID(this.trainerService.Auth)
     .subscribe(res =>{
       this.trainer = res as Trainer;
       this.calculateTotal(this.trainer.team);  // Calculate Total SS of Trainer Pokemon Team
       this.calculateRecommenedPower(this.trainer.team);
     })
  }

  calculateTotal(team:Pokemon[]){  // Calculate Total SS of Trainer Pokemon Team
   let totalSS = 0, totalHP = 0, totalATK = 0, totalDEF = 0,
   totalSATK = 0, totalSDEF = 0, totalSPD = 0;

      for (let i in team){
        totalSS = totalSS + team[i].SS;
        totalHP = totalHP + team[i].HP;
        totalATK = totalATK + team[i].ATK;
        totalDEF = totalDEF + team[i].DEF;
        totalSATK = totalSATK + team[i].SATK;
        totalSDEF = totalSDEF + team[i].SDEF;
        totalSPD = totalSPD + team[i].SPD;
      }
      this.max = Math.max(totalHP,totalATK,totalDEF,totalSATK,totalSDEF,totalSPD);

      this.totalSS = totalSS; this.totalHP = totalHP; this.totalATK = totalATK;
      this.totalDEF = totalDEF; this.totalSATK = totalSATK;
      this.totalSDEF = totalSDEF; this.totalSPD = totalSPD;

      this.totalSSRate = this.totalSS * this.rate;  // Total SS * Rate (%)
  }

  calculateRecommenedPower(team:Pokemon[]){
    let rate = 167000/4533;
    this.recommenedPower = rate * this.totalSS;
  }


}
