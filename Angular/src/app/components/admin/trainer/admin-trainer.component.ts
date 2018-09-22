import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../services/trainer.service';  // Pokedex Service
import { Trainer } from '../../../models/trainer';  // Trainer Model

import { ToastrService } from 'ngx-toastr';  // Toastr

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'app-admin-trainer',
  templateUrl: './admin-trainer.component.html',
  styleUrls: ['./admin-trainer.component.css']
})

export class AdminTrainerComponent implements OnInit {

  trainers: Trainer[];

  constructor(private trainerService: TrainerService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.trainerService.getFireTrainers()  // HTTP POST to Server
    .subscribe(res => {  // Subscribe to the Server Response
     this.trainers = res as Trainer[];  // Response as Service Trainer = List
   });
  }

  addFireTrainer(form: NgForm){
    if (form.value.id) {  // Already Trainer ID? -> Update
      this.trainerService.updateFireTrainer(form.value);  // Update Trainer with Form Values
      this.toastr.info('Good!', 'Trainer Updated!');
      this.resetForm(form);  // Reset Form
    }
  }

  updateFireTrainer(trainer: Trainer){  // NEW Trainer Object with the Trainer -> selected Trainer
    this.trainerService.selectedTrainer = Object.assign({}, trainer);;
  }

  deleteFireTrainer(trainer: Trainer){  // Need the Trainer ID
    if(confirm("Are You sure?")){
    this.trainerService.deleteFireTrainer(trainer);  // Delete Trainer by ID
    this.toastr.warning('Oh Well!', 'Trainer Deleted');
    this.trainerService.selectedTrainer = <Trainer>{};  // On Delete, New Trainer
    }
  }

  resetForm($event,form?: NgForm){
    event.preventDefault();
    if (form) form.reset();  // Form?
    this.trainerService.selectedTrainer = <Trainer>{};  // On Reset, New Trainer
  }

}

// Main Component to Admin Trainers. By default, Admin CAN'T add Trainers. Trainers should register itselfs
