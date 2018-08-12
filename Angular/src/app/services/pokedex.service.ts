import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';  // Pokemon Model

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  selectedPokemon: Pokemon;  // Save selected Pokemon
  pokedex: Pokemon[];  // Pokedex with Pokemon List
  readonly URL_API = "http://localhost:3000/pokedex";  // Server API


  constructor(private http: HttpClient) {
    this.selectedPokemon = <Pokemon>{};  // At start We have empty Pokemon
   }

  getPokedex(){
    return this.http.get(this.URL_API);  // HTTP GET to Server API - POSTMAN belike
  }

  getPokemonbyId(id: string){  // URL/PokemonID
    return this.http.get(this.URL_API + `/${id}`);  // HTTP GET to Server API - POSTMAN belike
  }

  evolutionToString(evolution: string) {  // Changing Evolution Number to String
    if (evolution == "1") evolution = "Tiny";
    if (evolution == "2") evolution = "Medium";
    if (evolution == "3") evolution = "Final";
    if (evolution == "4") evolution = "Mega";
    if (evolution == "5") evolution = "R2";

    return evolution;
  }

}
