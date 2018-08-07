import { Component, OnInit } from '@angular/core';

import { TypesService } from '../../../../services/types.service';  // Pokedex Service
import { FilterService } from '../../../../services/filter.service';  // Pokedex Service
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'lab-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  pokemonResult: Pokemon[];
  filterType: string;
  urlImage: string;

  constructor(private typeService: TypesService,
              private filter: FilterService,
              private router: Router) {

                this.urlImage = "../../../../assets/images/pokemon/";  }

  ngOnInit() {
  this.filterType = this.typeService.selectedType;
  this.filter.filterPokemon(this.filterType)
   .subscribe(res =>{
    this.pokemonResult = res as any;  // Response as Pokemon = List
   })
  }

  navigate(pokemon: Pokemon) {
    this.router.navigate(['/pokedex', pokemon.picture]);  // Navigate to Single Pokemon using Image NAME
  }

}
