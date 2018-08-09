import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TypesService {

  types: string[];
  stats: string[];
  selectedType: string ="Any";
  selectedStat: string ="Pokédex Nº";

  constructor() {

    this.types = ["Normal", "Fighting", "Flying", "Poison", "Ground",
                  "Rock", "Bug", "Ghost", "Steel", "Fire",
                  "Water", "Grass", "Electric", "Psychic", "Ice",
                  "Dragon", "Dark", "Fairy"];

    this.stats = ["ATK", "DEF", "S.ATK", "S.DEF", "SPD", "SS"];
   }
}
