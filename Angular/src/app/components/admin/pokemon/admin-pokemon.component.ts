import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../../services/pokedex.service';  // Pokedex Service
import { Pokemon } from '../../../models/pokemon';  // Pokemon Model

import { ToastrService } from 'ngx-toastr';  // Toastr

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'app-pokemon',
  templateUrl: './admin-pokemon.component.html',
  styleUrls: ['./admin-pokemon.component.css']
})

export class AdminPokemonComponent implements OnInit {

  constructor(private pokedexService: PokedexService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getPokemon();  // Get Pokemon at the start
  }

  getPokemon(){
     this.pokedexService.getPokemon()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
      this.pokedexService.pokedex = res as Pokemon[];  // Response as Service Pokedex = List
    });
  }

  addPokemon(form: NgForm){
    if (form.value._id) {  // Already Pokemon ID? -> Update
      this.pokedexService.updatePokemon(form.value)  // Update Pokemon with Form Values
       .subscribe (res => {  // Subscribe to the Server Response
         this.toastr.info('Bien!', 'Pokémon Actualizado');
         this.resetForm(form);  // Reset Form
       })
    }
    else {  // Not Pokemon ID? Oh, New Pokemon?
      this.pokedexService.addPokemon(form.value)  // Add Pokemon with Form Values
      .subscribe(res => {  // Subscribe to the Server Response
        this.toastr.success('Genial!', 'Pokémon Agregado');
        this.resetForm(form);  // Reset Form
      });
    }
  }

  updatePokemon(pokemon: Pokemon){  // NEW Pokemon Object with the Pokemon -> selected Pokemon
    this.pokedexService.selectedPokemon = Object.assign({}, pokemon);;
  }

  deletePokemon(_id: string){  // Need the Pokemon ID

    if(confirm("Are You sure?")){
    this.pokedexService.deletePokemon(_id)  // Delete Pokemon by ID
     .subscribe( res => {  // Subscribe to the Server Response
        this.getPokemon();  // Once Deleted, Update the Pokedex List
        this.toastr.warning('Vaya!', 'Pokémon Eliminado');
     });
    }
  }

  resetForm(form?: NgForm){
    if (form) form.reset();  // Form?
    this.pokedexService.selectedPokemon = <Pokemon>{};  // On Reset, New Pokemon
  }

}
