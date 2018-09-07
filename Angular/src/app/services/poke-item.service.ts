import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API

import { pokeItem } from '../models/poke-item';  // pokeItem Model

@Injectable({
  providedIn: 'root'
})

export class pokeItemService {

  selectedpokeItem: pokeItem;  // Save selected pokeItem
  pokeItemList: pokeItem[];  // pokeItem List
  readonly POKEITEM_API = "http://localhost:3000/held-items";  // Server API
  readonly POKEITEM_NAME_API = "http://localhost:3000/held-item_name";  // Server API for pokeItem Names

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient) {
    this.selectedpokeItem = <pokeItem>{};  // At start We have empty pokeItem
   }

  getpokeItem(){
    return this.http.get(this.POKEITEM_API);  // HTTP GET to Server API - POSTMAN belike
  }

  getpokeItembyName(name: string){
    const params = {pokeItem: name};  // pokeItem Name
    return this.http.get(this.POKEITEM_NAME_API, {params: params});  // HTTP GET to Server API - POSTMAN belike
  }

  getpokeItembyId(id: string){  // URL/MoveID
    return this.http.get(this.POKEITEM_API + `/${id}`);  // HTTP GET to Server API - POSTMAN belike
  }

  addpokeItem(pokeItem: pokeItem){  // We add a pokeItem
    return this.http.post(this.POKEITEM_API, pokeItem);  // HTTP POST to Server API - POSTMAN belike
  }

  updatepokeItem(pokeItem:pokeItem){  // We update a pokeItem
    return this.http.put(this.POKEITEM_API + `/${pokeItem._id}`, pokeItem);  // HTTP PUT to Server API - POSTMAN belike
  }

  deletepokeItem(_id: string){  // To delete only need ID
    return this.http.delete(this.POKEITEM_API + `/${_id}` );  // HTTP DELETE to Server API - POSTMAN belike
  }
}
