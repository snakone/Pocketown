import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../../models/trainer';  // Trainer Model
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model

import { ActivatedRoute } from '@angular/router'; // Routes
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainer: Trainer;
  urlPokemon: string;
  urlImage: string;
  totalSS: number = 0;  // Total SS of Trainer Team
  rate: number = 0.0200080032;  // 4998/100 Where 4998 is Max Pokemon SS * 6 (Progress bar MAX value is 100)

  constructor(private trainerService: TrainerService,
              private activeRoute: ActivatedRoute,
              private router : Router) {
                this.urlPokemon = "../../../../../assets/images/pokemon/";
                this.urlImage = "../../../../../assets/images/avatar/";
              }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.name;  // Get the Trainer Name from URL
    this.trainerService.getFireTrainerbyID(routeParams)
     .subscribe(res =>{
          this.trainer = res as Trainer;  // Response = Trainer
          this.calculateTotalSS(this.trainer.team);  // Calculate Total SS of Trainer Pokemon Team
      });

  }

  navigate(pokemon: string){ // On Pokemon Team, We don't save Pokemon Object, only the Name
      this.router.navigate(['/pokedex', pokemon]);  // Navigate to Single Pokemon using Pokemon Name
  }

  calculateTotalSS(team:Pokemon[]){  // Calculate Total SS of Trainer Pokemon Team
      for (let i in team){
        this.totalSS = this.totalSS + team[i].SS;
      }
    this.totalSS = this.totalSS * this.rate;  // Total SS * Rate
  }

}

// Page to show info About a Single Trainer - Its different from the Profile Page
