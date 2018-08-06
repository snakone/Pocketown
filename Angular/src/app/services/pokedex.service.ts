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

  getPokemon(){
    return this.http.get(this.URL_API);  // HTTP GET to Server API - POSTMAN belike
  }

  addPokemon(pokemon: Pokemon){  // We add a Pokemon
    return this.http.post(this.URL_API, pokemon);  // HTTP POST to Server API - POSTMAN belike
  }

  updatePokemon(pokemon:Pokemon){  // We update a Pokemon
    return this.http.put(this.URL_API + `/${pokemon._id}`, pokemon);  // HTTP PUT to Server API - POSTMAN belike
  }

  deletePokemon(_id: string){  // To delete only need ID
    return this.http.delete(this.URL_API + `/${_id}` );  // HTTP DELETE to Server API - POSTMAN belike
  }
}
