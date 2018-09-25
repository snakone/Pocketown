import { Component, OnInit, Input } from '@angular/core';

import { TrainerService } from '../../../../../services/trainer.service';  // Trainer Service
import { AuthService } from '../../../../../services/auth.service';  // Auth0 Service

import { MatDialog } from '@angular/material';  // Dialog
import { ConfirmComponent } from '../../../../static/confirm/confirm.component';  // Component used on Dialog

import { Trainer } from '../../../../../models/trainer';  // Trainer Model
import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

import { Router } from '@angular/router'; // Router
import { ToastrService } from 'ngx-toastr';  // Toastr

@Component({
  selector: 'profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  trainer: Trainer;  // Trainer from MongoDB
  urlPokemon: string;
  urlImage: string;
  editing: boolean;  // To know if the Trainer is Editing or NOT
  pokemonTeam: Pokemon[];  // Trainer Pokemon Team

  constructor(private authService: AuthService,
              private trainerService: TrainerService,
              private router : Router,
              private toastr: ToastrService,
              public dialog: MatDialog) {
                this.urlPokemon = "../../../../../../assets/images/pokemon/";
                this.urlImage = "../../../../../../assets/images/avatar/";
                this.editing = false;
               }

  ngOnInit() {
    // Update to Online Status only the First Time and If is a Trainer
    this.trainerService.updateTrainerOnlineStatus(true);
    this.trainerService.firstLogin = false;  // First Login = False

    this.trainerService.getFireTrainerbyID(this.trainerService.Auth)
     .subscribe(res =>{
       this.trainer = res as Trainer;
     })
  }

  removePokemon(i){ // Index
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {  // If Dialog Result = YES
      this.trainerService.fireTrainer.team.splice(i,1); // Remove Pokemon on Team by Index
      this.trainerService.addTeamToTrainer(this.trainerService.fireTrainer.team); // After, We add the NEW Team
      this.toastr.warning('',"Pokémon Removed", {
        timeOut: 3000,
        extendedTimeOut: 2000
        });
      } // End of IF
    });
  }

  navigate(pokemon: string){ // On Pokemon Team, We don't save Pokemon Object, only the Name
    this.router.navigate(['/pokedex', pokemon]);  // Navigate to Single Pokemon using Pokemon Name
  }

  editTeam(){  // Toogle Edit Section
    this.editing = !this.editing;
  }

}
