import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';  // Pokemon Model


@Injectable({
  providedIn: 'root'
})

export class FilterService {

  filteredPokemon: Pokemon[];

  readonly URL_API = "http://localhost:3000/laboratory";  // Server API

  constructor(private http: HttpClient) { }

  filterPokemon(pokemonType: string, pokemonStat: string){
    if (pokemonStat == "S.ATK") pokemonStat = "SATK";
    if (pokemonStat == "S.DEF") pokemonStat = "SDEF";
    if (pokemonType == "Any") pokemonType = "%";
    const params = {type: pokemonType, stat: pokemonStat};  // Send the Type in HTTP Params
    return this.http.get(this.URL_API, {params: params} );  // HTTP GET to Server API - POSTMAN belike
  }

}
