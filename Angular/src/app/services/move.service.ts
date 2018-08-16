import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API

import { Move } from '../models/move';  // Move Model

@Injectable({
  providedIn: 'root'
})

export class MoveService {

  selectedMove: Move;  // Save selected Move
  moveList: Move[];  // Pokedex with Move List
  readonly ADMIN_API = "http://localhost:3000/admin/move";  // Server API


  constructor(private http: HttpClient) {
    this.selectedMove = <Move>{};  // At start We have empty Move
   }

  getMove(){
    return this.http.get(this.ADMIN_API);  // HTTP GET to Server API - POSTMAN belike
  }

  addMove(move: Move){  // We add a Move
    return this.http.post(this.ADMIN_API, move);  // HTTP POST to Server API - POSTMAN belike
  }

  updateMove(move:Move){  // We update a Move
    return this.http.put(this.ADMIN_API + `/${move._id}`, move);  // HTTP PUT to Server API - POSTMAN belike
  }

  deleteMove(_id: string){  // To delete only need ID
    return this.http.delete(this.ADMIN_API + `/${_id}` );  // HTTP DELETE to Server API - POSTMAN belike
  }
}
