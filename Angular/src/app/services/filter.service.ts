import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Pokemon } from '../models/pokemon';  // Pokemon Model
import { Type } from '../models/type';  // Pokemon Model

@Injectable({
  providedIn: 'root'
})

export class FilterService {

  filteredPokemon: Pokemon[];

  readonly URL_API = "http://localhost:3000/laboratory";  // Server API

  constructor(private http: HttpClient) { }

  filterPokemon(tipo: string){
    const params = {type: tipo};
    return this.http.get(this.URL_API, {params: params} );  // HTTP GET to Server API - POSTMAN belike
  }

}
