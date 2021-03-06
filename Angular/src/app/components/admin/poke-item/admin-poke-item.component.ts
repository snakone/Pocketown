import { Component, OnInit } from '@angular/core';

import { PokeItemService } from '../../../services/poke-item.service';  // Poke Item Service
import { PokeItem } from '../../../models/poke-item';  // Poke Item Model

import { ToastrService } from 'ngx-toastr';  // Toastr

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'app-admin-poke-item',
  templateUrl: './admin-poke-item.component.html',
  styleUrls: ['./admin-poke-item.component.css']
})

export class AdminPokeItemComponent implements OnInit {

  constructor(public pokeItemService: PokeItemService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getpokeItem();  // Get pokeItem at the start
  }

  getpokeItem(){
     this.pokeItemService.getpokeItem()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
      this.pokeItemService.pokeItemList = res as PokeItem[];  // Response as Service pokeItem = List
    });
  }

  addpokeItem(form: NgForm){
    if (form.value._id) {  // Already pokeItem ID? -> Update
      this.pokeItemService.updatepokeItem(form.value)  // Update pokeItem with Form Values
       .subscribe (res => {  // Subscribe to the Server Response
         this.toastr.info('Good!', 'Pokémon Item Updated!');
         this.resetForm(form);  // Reset Form
         this.getpokeItem();
       })
    }
    else {  // Not pokeItem ID? Oh, New pokeItem?
      this.pokeItemService.addpokeItem(form.value)  // Add pokeItem with Form Values
      .subscribe(res => {  // Subscribe to the Server Response
        this.toastr.success('Great!', 'Pokémon Item Added');
        this.resetForm(form);  // Reset Form
        this.getpokeItem();
      });
    }
  }

  updatepokeItem(pokeItem: PokeItem){  // NEW pokeItem Object with the pokeItem -> selected pokeItem
    this.pokeItemService.selectedpokeItem = Object.assign({}, pokeItem);;
  }

  deletepokeItem(_id: string){  // Need the pokeItem ID

    if(confirm("Are You sure?")){
    this.pokeItemService.deletepokeItem(_id)  // Delete pokeItem by ID
     .subscribe( res => {  // Subscribe to the Server Response
        this.getpokeItem();  // Once Deleted, Update the Pokedex List
        this.toastr.warning('Oh Well!', 'Pokémon Item Deleted');
     });
    }
  }

  resetForm(form?: NgForm){
    if (form) form.reset();  // Form?
    this.pokeItemService.selectedpokeItem = <PokeItem>{};  // On Reset, New pokeItem
  }

}

// Main Component to Admin Pokemon Items (Helds Items). ADD/EDIT/DELETE Pokemon Items
