import { Component, OnInit, Input } from '@angular/core';

import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service
import { TrainerService } from '../../../../../services/trainer.service';  // Trainer Service

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

import { MatDialog } from '@angular/material';  // Material Dialog
import { MatSnackBar } from '@angular/material';  // Material Snack Bar
import { ToastrService } from 'ngx-toastr';  // Toastr

import { ConfirmComponent } from '../../../../static/confirm/confirm.component'; // Dialog
import { PokemonTeamComponent } from '../../../../static/pokemon-team/pokemon-team.component'; // Snack Bar

import { Router } from '@angular/router'; // Router

@Component({
  selector: 'pokemon-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {

  urlImage: string;
  @Input() family: string[];  // Pokemon Familiars
  @Input() pokemon: Pokemon;  // Pokémon from Parent
  pokemonTeam: Pokemon[];

  constructor(private pokedexService: PokedexService,
              public trainerService: TrainerService,
              private router: Router, private toastr: ToastrService,
              public dialog: MatDialog, public snackBar: MatSnackBar) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
    }

  ngOnInit() {
     // Changing Evolution Number to String
     this.pokemon.evolution = this.pokedexService
      .evolutionToString(this.pokemon.evolution);
  }

  goPokemon(familiar){
      this.pokemon = familiar;
      // Changing Evolution Number to String
      this.pokemon.evolution = this.pokedexService
       .evolutionToString(this.pokemon.evolution);
  }

  addPokemonToTeam(pokemon:Pokemon) {
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {  // If Dialog Result = YES
        if (this.trainerService.fireTrainer.team.length >= 6) {  // Trainer Team >= 6 Pokémon
          this.toastr.error('',"Only 6 Pokémon allowed", {
            timeOut: 5000,
            extendedTimeOut: 1000
          });  // Else Trainer Team >= 6
        } else {  // Add Pokémon to Team & Show Snack Bar with actual Trainer Team
          this.trainerService.addPokemontoTeam(pokemon);
          this.toastr.success('',"Pokémon Added", {
            timeOut: 3000,
            extendedTimeOut: 2000
          });
          this.snackBar.openFromComponent(PokemonTeamComponent, { // Snack Bar - Pokemon Team Component
             duration: 3000,
             panelClass: ['snackbar'],
             verticalPosition: 'bottom'
           });
        } // End of Else Team > 6
      }  // End of If Result
    });
  }

}

// Child Component of Pokemon. Display Pokemon Main Info - Stat bars
