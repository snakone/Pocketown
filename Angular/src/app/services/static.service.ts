import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StaticService {

  types: string[];
  stats: string[];
  selectedType: string ="";  // Save selected Type to play with it
  selectedStat: string ="";  // Save selected Stat to play with it

  constructor() {

    this.types = ["Normal", "Fighting", "Flying", "Poison", "Ground",
                  "Rock", "Bug", "Ghost", "Steel", "Fire",
                  "Water", "Grass", "Electric", "Psychic", "Ice",
                  "Dragon", "Dark", "Fairy", "Any"];

    this.stats = ["HP", "ATK", "DEF", "S.ATK", "S.DEF", "SPD", "SS", "Nº"];
   }
}
