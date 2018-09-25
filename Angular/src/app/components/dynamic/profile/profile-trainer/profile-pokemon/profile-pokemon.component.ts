import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../../../models/trainer';  // Trainer Model
import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

import { Router } from '@angular/router'; // Router

@Component({
  selector: 'profile-pokemon',
  templateUrl: './profile-pokemon.component.html',
  styleUrls: ['./profile-pokemon.component.css']
})
export class ProfilePokemonComponent implements OnInit {

  trainer: Trainer;
  urlLogo: string;
  urlPokemon: string;

  maxSS: number;
  pokemonSS: Pokemon;
  maxHP: number;
  pokemonHP: Pokemon;
  maxATK: number;
  pokemonATK: Pokemon;
  maxDEF: number;
  pokemonDEF: Pokemon;
  maxSATK: number;
  pokemonSATK: Pokemon;
  maxSDEF: number;
  pokemonSDEF: Pokemon;
  maxSPD: number;
  pokemonSPD: Pokemon;

  constructor(private trainerService: TrainerService,
              private router: Router) {
      this.urlLogo = "../../../../../../assets/icons/";
      this.urlPokemon = "../../../../../../assets/images/pokemon/";
  }

  ngOnInit() {
    this.trainerService.getFireTrainerbyID(this.trainerService.Auth)
     .subscribe(res =>{
       this.trainer = res as Trainer;
       this.calculate(this.trainer.team);
     })
  }

  calculate(team:Pokemon[]){
    this.maxSS = 0; this.maxHP = 0; this.maxATK = 0; this.maxDEF = 0;
    this.maxSATK = 0; this.maxSDEF = 0; this.maxSPD = 0;

    for (let i in team){
        if (this.maxSS < team[i].SS){
          this.maxSS = team[i].SS;
          this.pokemonSS = team[i];
        }

        if (this.maxHP < team[i].HP){
          this.maxHP = team[i].HP;
          this.pokemonHP = team[i];
        }

        if (this.maxATK < team[i].ATK){
          this.maxATK = team[i].ATK;
          this.pokemonATK = team[i];
        }

        if (this.maxDEF < team[i].DEF){
          this.maxDEF = team[i].DEF;
          this.pokemonDEF = team[i];
        }

        if (this.maxSATK < team[i].SATK){
          this.maxSATK = team[i].SATK;
          this.pokemonSATK = team[i];
        }

        if (this.maxSDEF < team[i].SDEF){
          this.maxSDEF = team[i].SDEF;
          this.pokemonSDEF = team[i];
        }

        if (this.maxSPD < team[i].SPD){
          this.maxSPD = team[i].SPD;
          this.pokemonSPD = team[i];
        }
      }  // End of For
    }

    navigate(pokemon: Pokemon) {
      this.router.navigate(['/pokedex', pokemon.picture]);  // Navigate to Single Pokemon using Pokemon ID
    }

}
