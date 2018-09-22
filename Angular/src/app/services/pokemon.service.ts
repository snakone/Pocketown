import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';  // Pokemon Model

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  selectedPokemon: Pokemon;  // Save selected Pokemon
  pokedex: Pokemon[];  // Pokedex with Pokemon List
  readonly POKEMON_API = "http://localhost:3000/pokemon";  // Server API
  readonly POKEMON_NAME_API = "http://localhost:3000/pokemon_name";  // Serer API GET Pokemon by Name

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient) {
    this.selectedPokemon = <Pokemon>{};  // At start We have empty Pokemon
   }

  getPokemon(){
    return this.http.get(this.POKEMON_API);  // HTTP GET to Server API - POSTMAN belike
  }

  getPokemonbyName(name: string){
    const params = {picture: name};  // Pokemon Name
    return this.http.get(this.POKEMON_NAME_API, {params: params});  // HTTP GET to Server API - POSTMAN belike
  }

  getPokemonbyId(id: string){  // Pokedex/PokemonID
    return this.http.get(this.POKEMON_API + `/${id}`);  // HTTP GET to Server API - POSTMAN belike
  }

  addPokemon(pokemon: Pokemon){  // We add a Pokemon
    return this.http.post(this.POKEMON_API, pokemon);  // HTTP POST to Server API - POSTMAN belike
  }

  updatePokemon(pokemon:Pokemon){  // We update a Pokemon
    return this.http.put(this.POKEMON_API + `/${pokemon._id}`, pokemon);  // HTTP PUT to Server API - POSTMAN belike
  }

  deletePokemon(_id: string){  // To delete only need ID
    return this.http.delete(this.POKEMON_API + `/${_id}` );  // HTTP DELETE to Server API - POSTMAN belike
  }
}

// Pokemon Service to work with Pokemons - API - CRUD - CREATE/READ/UPDATE/DELETE
