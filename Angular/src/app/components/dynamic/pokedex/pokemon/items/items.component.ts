import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service
import { pokeItemService } from '../../../../../services/poke-item.service';  // Pokedex Service
import { pokeItem } from '../../../../../models/poke-item';  // Pokemon Model

@Component({
  selector: 'pokemon-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  urlImage: string;
  urlPokemon: string;
  family: string[];  // Pokemon Familiars
  showDescripItem1: boolean = false;  // Show ot NOT
  showDescripItem2: boolean = false;  // Show ot NOT
  item1: pokeItem; // Poke Item 1
  item2: pokeItem; // Poke Item 2

  @Input() pokemon: Pokemon;

  constructor(private pokedexService: PokedexService,
              private pokeitemService: pokeItemService) {
        this.urlImage = "../../../../../../assets/images/items/";
        this.urlPokemon = "../../../../../../assets/images/pokemon/";
   }

   ngOnInit() {
     this.pokedexService.getFamily(this.pokemon.family)  // Get the Family of the Pokemon
      .subscribe(res => {
        this.family = res as any;  // Respond Server
      });

      // Changing Evolution Number to String
      this.pokemon.evolution = this.pokedexService
       .evolutionToString(this.pokemon.evolution);
   }

   goPokemon(familiar){
       this.pokemon = familiar;
       // Changing Evolution Number to String
       this.pokemon.evolution = this.pokedexService
        .evolutionToString(this.pokemon.evolution);

      // We do this everytime You select a Pokemon
      // Getting Poke Item Object from Server given his Name

      this.pokeitemService.getpokeItembyName(this.pokemon.item_picture)
       .subscribe(res =>{
         this.item1 = res[0] as pokeItem;
       })

       // Getting Poke Item Object from Server given his Name

       this.pokeitemService.getpokeItembyName(this.pokemon.item2_picture)
       .subscribe(res =>{
         this.item2 = res[0] as pokeItem;
       })
   }

   openDescripItem1(){
     this.showDescripItem1 = true;
     this.showDescripItem2 = false;

     // Getting Poke Item Object from Server given his Name

     this.pokeitemService.getpokeItembyName(this.pokemon.item_picture)
      .subscribe(res =>{
        this.item1 = res[0] as pokeItem;
      })

   }

   openDescripItem2(){
     this.showDescripItem1 = false;
     this.showDescripItem2 = true;

     // Getting Poke Item Object from Server given his Name

     this.pokeitemService.getpokeItembyName(this.pokemon.item2_picture)
     .subscribe(res =>{
       this.item2 = res[0] as pokeItem;
     })
   }

 }
