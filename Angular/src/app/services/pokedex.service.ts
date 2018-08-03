import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  selectedPokemon: Pokemon;
  pokedex: Pokemon[];
  readonly URL_API = "http://localhost:3000/pokedex";

  constructor(private http: HttpClient) {
    this.selectedPokemon = <Pokemon>{};
   }

  getPokemon(){
    return this.http.get(this.URL_API);
  }

  addPokemon(pokemon: Pokemon){
    return this.http.post(this.URL_API, pokemon);
  }

  updatePokemon(pokemon:Pokemon){
    return this.http.put(this.URL_API + `/${pokemon._id}`, pokemon);
  }

  deletePokemon(_id: string){
    return this.http.delete(this.URL_API + `/${_id}` );
  }
}
