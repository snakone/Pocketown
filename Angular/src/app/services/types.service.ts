import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TypesService {

  types: string[];
  selectedType: string ="";

  constructor() {

    this.types = ["Normal", "Fire", "Water", "Electric", "Grass",
                  "Ice", "Ground", "Flying", "Ghost", "Rock",
                  "Fighting", "Poison", "Psychic", "Bug", "Dark",
                  "Steel", "Fairy"];
   }
}
