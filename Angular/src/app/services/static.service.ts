import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StaticService {

  types: string[];
  stats: string[];
  evolutions: string[];
  selectedType: string ="";  // Save selected Type to play with it
  selectedStat: string ="Nº";  // Save selected Stat to play with it
  selectedEvolution: string = "Any";  // Save selected Evolution to play with it
  evolutionName: string = "Any";  //  Convert number to evolution Name

  constructor() {

    this.types = ["Normal", "Fighting", "Flying", "Poison", "Ground",  // Types
                  "Rock", "Bug", "Ghost", "Steel", "Fire",
                  "Water", "Grass", "Electric", "Psychic", "Ice",
                  "Dragon", "Dark", "Fairy"];

    this.stats = ["HP", "ATK", "DEF", "S.ATK", "S.DEF", "SPD", "SS"];  // Stats

    this.evolutions = ["Tiny", "Little", "Adult", "Mega", "Mega R2"];  // Evolutions
   }
}
