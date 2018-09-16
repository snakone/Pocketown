import { Component, OnInit, Input } from '@angular/core';

import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service
import { TrainerService } from '../../../../../services/trainer.service';  // Trainer Service

import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { ToastrService } from 'ngx-toastr';  // Toastr

import { ConfirmComponent } from '../../../../static/confirm/confirm.component';
import { PokemonTeamComponent } from '../../../../static/pokemon-team/pokemon-team.component';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { Trainer } from '../../../../../models/trainer';  // Trainer Model
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'pokemon-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {

  urlImage: string;
  family: string[];  // Pokemon Familiars
  pokemonTeam: Pokemon[];

  @Input() pokemon: Pokemon;

  constructor(private pokedexService: PokedexService,
              private trainerService: TrainerService,
              private router: Router, private toastr: ToastrService,
              public dialog: MatDialog, public snackBar: MatSnackBar) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
    }

  ngOnInit() {
    this.pokedexService.getFamily(this.pokemon.family)  // Get the Family of the Pokemon
     .subscribe(res => {
       this.family = res as any;  // Respond Server as Family
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
  }

  addPokemonToTeam(pokemon:Pokemon) {
    const dialogRef = this.dialog.open(ConfirmComponent,{});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.trainerService.trainerTeam.length >= 6) {  // Trainer Team >= 6 Pokémon
          this.toastr.error('',"Team can't exceed 6 Pokémon", {
            timeOut: 5000,
            extendedTimeOut: 1000
          });
        } else {
          this.trainerService.addPokemontoTeam(pokemon);
          this.snackBar.openFromComponent(PokemonTeamComponent, {
             duration: 3000,
             panelClass: ['snackbar'],
           });
        }

      }  // End of If Result
    });
  }

}
