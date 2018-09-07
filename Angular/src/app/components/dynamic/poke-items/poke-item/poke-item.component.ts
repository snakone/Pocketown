import { Component, OnInit } from '@angular/core';

import { pokeItem } from '../../../../models/poke-item';  // Pokemon Model

import { pokeItemService } from '../../../../services/poke-item.service';  // Move Service

import { ActivatedRoute } from '@angular/router'; // Routes

@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.css']
})
export class PokeItemComponent implements OnInit {

  pokeItem: pokeItem;

  constructor(private pokeitemService: pokeItemService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.pokeitem; // Get the Move ID from URL
    this.pokeitemService.getpokeItembyId(routeParams)  // HTTP POST to Server with Move ID
     .subscribe(res => {  // Subscribe to the Server Response
       this.pokeItem = res as pokeItem;  // Response as Move

     })
  }

}
