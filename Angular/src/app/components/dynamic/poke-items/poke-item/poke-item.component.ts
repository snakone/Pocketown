import { Component, OnInit } from '@angular/core';

import { PokeItem } from '../../../../models/poke-item';  // Poke Item Model

import { PokeItemService } from '../../../../services/poke-item.service';  // Poke Item Service

import { ActivatedRoute } from '@angular/router'; // Routes

@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.css']
})
export class PokeItemComponent implements OnInit {

  pokeItem: PokeItem;
  urlImage: string;

  constructor(private pokeitemService: PokeItemService,
              private activeRoute: ActivatedRoute) {

              this.urlImage = "../../../../../../assets/images/items/"; }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.pokeitem; // Get the Poke Item ID from URL
    this.pokeitemService.getpokeItembyId(routeParams)  // HTTP POST to Server with Move ID
     .subscribe(res => {  // Subscribe to the Server Response
       this.pokeItem = res as PokeItem;  // Response as Poke Item

     })
  }

}

// Component to Display a Single Pokemon Item (Held Item) given his ID via URL
