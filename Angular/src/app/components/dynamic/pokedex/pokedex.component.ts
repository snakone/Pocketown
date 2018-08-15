import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../../services/pokedex.service';  // Pokedex Service
import { Pokemon } from '../../../models/pokemon';  // Pokemon Model
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex: Pokemon[];  // Original Pokedex
  filteredPokedex: Pokemon[];  // Filtered Pokedex
  selectedPokemon: Pokemon;  // Save selected Pokemon
  loading: boolean;  // Whenever the data is loaded or NOT
  searchValue: string = "";  // Input Value to Search For - ngModel on HTML
  urlImage: string;

  constructor(private pokedexService: PokedexService,
              private router: Router) {
    this.urlImage = "../../../../assets/images/pokemon/";
    this.loading = true;  // Start at true, always need to load at first time
   }

  ngOnInit() {
     this.pokedexService.getPokedex()  // HTTP POST to Server
      .subscribe(res => {  // Subscribe to the Server Response
        this.pokedex = res as any;  // Response as Pokemon = List
        this.filteredPokedex = this.pokedex;  // Filtered List
        this.loading = false;  // After We got the data No more Loading
      })
  }

  onKeyUp(event){  // On Key Up Javascript Event
    event.preventDefault();
    this.filterPokemonbySearch();  // Filter Pokemon
  }

  filterPokemonbySearch() {
     this.filteredPokedex = this.pokedex.filter( ( pokemon, index ) => {  // Filter Array
      // ngModel on Input Text - Search Value
      return pokemon.name.includes(this.searchValue);  // Filter Original List into Filtered List
    } );
  }

  navigate(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.router.navigate(['/pokedex', pokemon._id]);  // Navigate to Single Pokemon using Pokemon ID
  }


}
