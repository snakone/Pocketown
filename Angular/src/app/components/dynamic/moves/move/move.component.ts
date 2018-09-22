import { Component, OnInit } from '@angular/core';

import { Move } from '../../../../models/move';  // Pokemon Model
import { MoveService } from '../../../../services/move.service';  // Move Service

import { ActivatedRoute } from '@angular/router'; // Routes

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {

  move: Move;

  constructor(private moveService: MoveService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.move; // Get the Move ID from URL
    this.moveService.getMovebyId(routeParams)  // HTTP POST to Server with Move ID
     .subscribe(res => {  // Subscribe to the Server Response
       this.move = res as Move;  // Response as Move
     })
  }

}

// Component to Display a Single Pokemon Move given his ID via URL
