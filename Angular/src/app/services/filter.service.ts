import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';  // Pokemon Model


@Injectable({
  providedIn: 'root'
})

export class FilterService {

  filteredPokemon: Pokemon[];  // List of Filtered Pokemon

  readonly URL_API = "http://localhost:3000/laboratory";  // Server API

  constructor(private http: HttpClient) { }

  filterPokemon(pokemonType: string, pokemonStat: string){
    // Checking before sending data to Server
    if (pokemonStat == "S.ATK") pokemonStat = "SATK";  // Match MongoDB property
    if (pokemonStat == "S.DEF") pokemonStat = "SDEF";  // Match MongoDB property
    if (pokemonStat == "Nº") pokemonStat = "pokedex";  // Match MongoDB property
    if (pokemonType == "Any") pokemonType = ".*?";  // No Type? RegExp to match ALL *
    const params = {type: pokemonType, stat: pokemonStat};  // Send the Type and Stat in HTTP Params
    return this.http.get(this.URL_API, {params: params} );  // HTTP GET to Server API - POSTMAN belike
  }

}
