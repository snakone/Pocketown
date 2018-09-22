import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';  // Pokemon Model

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  selectedPokemon: Pokemon;  // Save selected Pokemon
  pokedex: Pokemon[];  // Pokedex with Pokemon List
  readonly POKEDEX_API = "http://localhost:3000/pokedex";  // Server API Pokedex

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient) {
    this.selectedPokemon = <Pokemon>{};  // At start We have empty Pokemon
   }

  getPokedex(){
    return this.http.get(this.POKEDEX_API);  // HTTP GET to Server API - POSTMAN belike
  }

  getFamily(family: string){  // Get the Pokemon Family
    return this.http.get(this.POKEDEX_API + `/${family}`);   // HTTP GET to Server API - POSTMAN belike
  }

  evolutionToString(evolution: string) {  // Changing Evolution Number to String
    switch (evolution){
        case "1": { evolution = "Tiny"; break }
        case "2": { evolution = "Little"; break }
        case "3": { evolution = "Adult"; break }
        case "4": { evolution = "Mega"; break }
        case "5": { evolution = "R2"; break } }  // End of Switch
        return evolution;
    }

}

// Pokedex Service to work with Pokedex List - API - Only GET the Pokemon List and Family
