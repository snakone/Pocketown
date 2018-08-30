import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';  // Pokemon Model

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  selectedPokemon: Pokemon;  // Save selected Pokemon
  pokedex: Pokemon[];  // Pokedex with Pokemon List
  readonly ADMIN_API = "https://pocketown-server.herokuapp.com/admin/pokemon";  // Server API


  constructor(private http: HttpClient) {
    this.selectedPokemon = <Pokemon>{};  // At start We have empty Pokemon
   }

  getPokemon(){
    return this.http.get(this.ADMIN_API);  // HTTP GET to Server API - POSTMAN belike
  }

  addPokemon(pokemon: Pokemon){  // We add a Pokemon
    return this.http.post(this.ADMIN_API, pokemon);  // HTTP POST to Server API - POSTMAN belike
  }

  updatePokemon(pokemon:Pokemon){  // We update a Pokemon
    return this.http.put(this.ADMIN_API + `/${pokemon._id}`, pokemon);  // HTTP PUT to Server API - POSTMAN belike
  }

  deletePokemon(_id: string){  // To delete only need ID
    return this.http.delete(this.ADMIN_API + `/${_id}` );  // HTTP DELETE to Server API - POSTMAN belike
  }
}
