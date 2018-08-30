import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';  // Pokemon Model


@Injectable({
  providedIn: 'root'
})

export class FilterService {

  filteredPokemon: Pokemon[];  // List of Filtered Pokemon

  readonly URL_API = "https://polar-brook-88639.herokuapp.com/laboratory";  // Server API

  constructor(private http: HttpClient) { }

  filterPokemon(Type: string, Stat: string, Evolution: string){
    // Checking before sending data to Server
    if (Stat == "S.ATK") Stat = "SATK";  // Match MongoDB property
    if (Stat == "S.DEF") Stat = "SDEF";  // Match MongoDB property
    if (Stat == "Nº") Stat = "pokedex";  // Match MongoDB property
    if (Type == "Any") Type = ".*?";  // No Type? RegExp to match ALL *
    // No Evolution or ANY? RegExp to match ALL *
    if (Evolution == "" || Evolution == "6") Evolution = ".*?";

    // Send the Type, Stat and Evolution in HTTP Params
    const params = {type: Type, stat: Stat, evolution: Evolution};
    return this.http.get(this.URL_API, {params: params} );  // HTTP GET to Server API - POSTMAN belike
  }

}
