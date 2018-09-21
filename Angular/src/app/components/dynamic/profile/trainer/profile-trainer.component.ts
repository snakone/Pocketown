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
    this.trainerService.getFireTrainerbyID(this.trainerService.Auth).subscribe(res =>{
      this.trainer = res as Trainer;
    })
  }

  registerTeam(){
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result){  // If Dialog Result = YES

         }
    });
  }

  editTeam(){
    this.trainerService.trainerTeam = this.trainer.team;  // MongoDB Team = Edit Team
  }

  cancel(){
    this.trainerService.trainerTeam = [];  // Clean the Team
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
