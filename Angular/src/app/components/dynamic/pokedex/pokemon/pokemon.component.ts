import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../../../services/admin.service';  // Pokedex Service
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model

import { ActivatedRoute, Router } from '@angular/router'; // Routes

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokedex: Pokemon[];  // Pokedex List
  selectedPokemon: Pokemon;  // Save selected Pokemon
  urlImage: string;

  constructor(private admin: AdminService,
              private activeRoute: ActivatedRoute) {

              this.urlImage = "../../../../../assets/images/";
             }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.pokemon; // Get the Pokemon PICTURE Name from URL

    this.admin.getPokemon()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
       const pokemonList = res as any;  // Response as Pokemon = List
       this.pokedex = pokemonList.filter(function(element){ // Filter Pokemon List
        return element.picture == routeParams; // Pokemon Picture Name
        });
           this.selectedPokemon = this.pokedex[0];  // Always get 1 result so its 0
     })
  }

}
