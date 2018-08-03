import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../../services/pokedex.service';
import { Pokemon } from '../../../models/pokemon';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  constructor(private pokedexService: PokedexService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(){
     this.pokedexService.getPokemon()
     .subscribe(res => {
      this.pokedexService.pokedex = res as Pokemon[];
    });
  }

  addPokemon(form: NgForm){
    if (form.value._id) {
      this.pokedexService.updatePokemon(form.value)
       .subscribe (res => {
         this.toastr.info('Está bien', 'Pokémon Actualizado');
         this.resetForm(form);
       })
    }
    else {
      this.pokedexService.addPokemon(form.value)
      .subscribe(res => {
        this.toastr.success('Genial!', 'Pokémon Agregado');
        this.resetForm(form);
      });
    }
  }

  updatePokemon(pokemon: Pokemon){
    this.pokedexService.selectedPokemon = Object.assign({}, pokemon);;
  }

  deletePokemon(_id: string){

    if(confirm("Are You sure?")){
    this.pokedexService.deletePokemon(_id)
     .subscribe( res => {
        this.getPokemon();
        this.toastr.warning('Vaya!', 'Pokémon Eliminado');
     });
    }
  }

  resetForm(form?: NgForm){
    if (form) form.reset();
    this.pokedexService.selectedPokemon = <Pokemon>{};
    this.getPokemon();
  }

}
