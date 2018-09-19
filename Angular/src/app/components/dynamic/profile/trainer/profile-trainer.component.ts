import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service
import { AuthService } from '../../../../services/auth.service';  // Auth0 Service

import { MatDialog } from '@angular/material';  // Dialog
import { ConfirmComponent } from '../../../static/confirm/confirm.component';  // Component used on Dialog

import { Trainer } from '../../../../models/trainer';  // Trainer Model
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model

import { Router } from '@angular/router'; // Router
import { ToastrService } from 'ngx-toastr';  // Toastr

@Component({
  selector: 'trainer-profile',
  templateUrl: './profile-trainer.component.html',
  styleUrls: ['./profile-trainer.component.css']
})
export class ProfileTrainerComponent implements OnInit {

  trainer: Trainer;  // Trainer from MongoDB
  urlPokemon: string;
  urlImage: string;
  pokemonTeam: Pokemon[];

  constructor(private authService: AuthService,
              private trainerService: TrainerService,
              private router : Router,
              private toastr: ToastrService,
              public dialog: MatDialog) {
        this.urlPokemon = "../../../../../assets/images/pokemon/";
        this.urlImage = "../../../../../assets/images/avatar/";
  }

  ngOnInit() {
    this.trainer = this.trainerService.trainer;  // Get the Trainer from the Service
  }

  registerTeam(){
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result){  // If Dialog Result = YES
          this.trainerService.registerPokemonTeam(this.trainerService.trainerTeam,
                                                  this.trainer._id)  // Register Team
           .subscribe(res => {
             this.trainerService.trainerTeam = [];  // After Register Clean the Team
             this.trainerService.getTrainerbyId(this.trainer.trainerID)  // Get the Updated Team
              .subscribe(res => {
                this.trainerService.trainer = res[0] as Trainer;
                this.router.navigate(['/home']);  // Navigate to Home
                this.toastr.info('','Pokémon Team Registered!', {
                  timeOut: 10000,
                  extendedTimeOut: 5000
                });
              })
           });
         }
    });
  }

  editTeam(){
    this.trainerService.trainerTeam = this.trainer.team;  // MongoDB Team = Edit Team
  }

  cancel(){
    this.trainerService.trainerTeam = [];  // Clean the Team
    this.trainerService.getTrainerbyId(this.trainer.trainerID)  // Get the Original Team
     .subscribe(res => {
       this.trainer = res[0] as Trainer;  // Server Response as Trainer
     })
  }

  removePokemon(i){ // Index
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {  // If Dialog Result = YES
      this.trainerService.trainerTeam.splice(i,1); // Remove Trainer by Index from Edit Team
        }
    });
  }

}
