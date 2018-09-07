import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API

import { Move } from '../models/move';  // Move Model

@Injectable({
  providedIn: 'root'
})

export class MoveService {

  selectedMove: Move;  // Save selected Move
  moveList: Move[];  // Move List
  readonly MOVE_API = "http://localhost:3000/moves";  // Server API Moves
  readonly MOVE_NAME_API = "http://localhost:3000/move_name";  // Server API for Move Names

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient) {
    this.selectedMove = <Move>{};  // At start We have empty Move
   }

  getMove(){
    return this.http.get(this.MOVE_API);  // HTTP GET to Server API - POSTMAN belike
  }

  getMoveTypebyName(moves: string[]){
    const params = {moves: moves};  // Array of 4 Moves Names
    return this.http.get(this.MOVE_NAME_API, {params: params});  // HTTP GET to Server API - POSTMAN belike
  }

  getMovebyId(id: string){  // URL/MoveID
    return this.http.get(this.MOVE_API + `/${id}`);  // HTTP GET to Server API - POSTMAN belike
  }

  addMove(move: Move){  // We add a Move
    return this.http.post(this.MOVE_API, move);  // HTTP POST to Server API - POSTMAN belike
  }

  updateMove(move:Move){  // We update a Move
    return this.http.put(this.MOVE_API + `/${move._id}`, move);  // HTTP PUT to Server API - POSTMAN belike
  }

  deleteMove(_id: string){  // To delete only need ID
    return this.http.delete(this.MOVE_API + `/${_id}` );  // HTTP DELETE to Server API - POSTMAN belike
  }
}
