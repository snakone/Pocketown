import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API

import { pokeItem } from '../models/poke-item';  // pokeItem Model

@Injectable({
  providedIn: 'root'
})

export class pokeItemService {

  selectedpokeItem: pokeItem;  // Save selected pokeItem
  pokeItemList: pokeItem[];  // pokeItem List
  readonly ADMIN_API = "http://localhost:3000/admin/pokeItem";  // Server API
  readonly POKEITEM_API = "http://localhost:3000/admin/pokeItem_name";  // Server API for pokeItem Names


  constructor(private http: HttpClient) {
    this.selectedpokeItem = <pokeItem>{};  // At start We have empty pokeItem
   }

  getpokeItem(){
    return this.http.get(this.ADMIN_API);  // HTTP GET to Server API - POSTMAN belike
  }

  getpokeItembyName(pokeitem: string){
    const params = {pokeItem: pokeitem};  // pokeItem Name
    return this.http.get(this.POKEITEM_API, {params: params});  // HTTP GET to Server API - POSTMAN belike
  }

  addpokeItem(pokeItem: pokeItem){  // We add a pokeItem
    return this.http.post(this.ADMIN_API, pokeItem);  // HTTP POST to Server API - POSTMAN belike
  }

  updatepokeItem(pokeItem:pokeItem){  // We update a pokeItem
    return this.http.put(this.ADMIN_API + `/${pokeItem._id}`, pokeItem);  // HTTP PUT to Server API - POSTMAN belike
  }

  deletepokeItem(_id: string){  // To delete only need ID
    return this.http.delete(this.ADMIN_API + `/${_id}` );  // HTTP DELETE to Server API - POSTMAN belike
  }
}
