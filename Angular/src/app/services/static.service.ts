import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StaticService {

  types: string[];
  stats: string[];
  selectedType: string ="";
  selectedStat: string ="";

  constructor() {

    this.types = ["Normal", "Fighting", "Flying", "Poison", "Ground",
                  "Rock", "Bug", "Ghost", "Steel", "Fire",
                  "Water", "Grass", "Electric", "Psychic", "Ice",
                  "Dragon", "Dark", "Fairy", "Any"];

    this.stats = ["HP", "ATK", "DEF", "S.ATK", "S.DEF", "SPD", "SS", "Nº"];
   }
}
