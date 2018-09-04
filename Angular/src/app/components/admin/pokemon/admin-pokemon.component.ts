import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../../services/admin.service';  // Pokedex Service
import { Pokemon } from '../../../models/pokemon';  // Pokemon Model

import { ToastrService } from 'ngx-toastr';  // Toastr

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'app-pokemon',
  templateUrl: './admin-pokemon.component.html',
  styleUrls: ['./admin-pokemon.component.css']
})

export class AdminPokemonComponent implements OnInit {

  constructor(private admin: AdminService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getPokemon();  // Get Pokemon at the start
  }

  getPokemon(){
     this.admin.getPokemon()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
      this.admin.pokedex = res as any;  // Response as Service Pokedex = List
    });
  }

  addPokemon(form: NgForm){
    if (form.value._id) {  // Already Pokemon ID? -> Update
      this.admin.updatePokemon(form.value)  // Update Pokemon with Form Values
       .subscribe (res => {  // Subscribe to the Server Response
         this.toastr.info('Good!', 'Pokémon Updated');
         this.resetForm(form);  // Reset Form
         this.getPokemon();
       })
    }
    else {  // Not Pokemon ID? Oh, New Pokemon?
      this.admin.addPokemon(form.value)  // Add Pokemon with Form Values
      .subscribe(res => {  // Subscribe to the Server Response
        this.toastr.success('Great!', 'Pokémon Added');
        this.resetForm(form);  // Reset Form
        this.getPokemon();
      });
    }
  }

  updatePokemon(pokemon: Pokemon){  // NEW Pokemon Object with the Pokemon -> selected Pokemon
    this.admin.selectedPokemon = Object.assign({}, pokemon);;
  }

  deletePokemon(_id: string){  // Need the Pokemon ID

    if(confirm("Are You sure?")){
    this.admin.deletePokemon(_id)  // Delete Pokemon by ID
     .subscribe( res => {  // Subscribe to the Server Response
        this.getPokemon();  // Once Deleted, Update the Pokedex List
        this.toastr.warning('Oh Well!', 'Pokémon Deleted');
     });
    }
  }

  resetForm(form?: NgForm){
    if (form) form.reset();  // Form?
    this.admin.selectedPokemon = <Pokemon>{};  // On Reset, New Pokemon
  }

}
