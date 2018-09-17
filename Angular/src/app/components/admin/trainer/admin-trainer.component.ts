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

  constructor(private trainerService: TrainerService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getTrainer();  // Get Trainer at the start
  }

  getTrainer(){
     this.trainerService.getTrainers()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
      this.trainerService.trainerList = res as any;  // Response as Service Trainer = List
    });
  }

  addTrainer(form: NgForm){
    if (form.value._id) {  // Already Trainer ID? -> Update
      this.trainerService.updateTrainer(form.value)  // Update Trainer with Form Values
       .subscribe (res => {  // Subscribe to the Server Response
         this.toastr.info('Good!', 'Trainer Updated!');
         this.resetForm(form);  // Reset Form
         this.getTrainer();
       })
    }
    else {  // Not Trainer ID? Oh, New Trainer?
      this.trainerService.addTrainer(form.value)  // Add Trainer with Form Values
      .subscribe(res => {  // Subscribe to the Server Response
        this.toastr.success('Great!', 'Trainer Added');
        this.resetForm(form);  // Reset Form
        this.getTrainer();
      });
    }
  }

  updateTrainer(trainer: Trainer){  // NEW Trainer Object with the Trainer -> selected Trainer
    this.trainerService.selectedTrainer = Object.assign({}, trainer);;
  }

  deleteTrainer(_id: string){  // Need the Trainer ID

    if(confirm("Are You sure?")){
    this.trainerService.deleteTrainer(_id)  // Delete Trainer by ID
     .subscribe( res => {  // Subscribe to the Server Response
        this.getTrainer();  // Once Deleted, Update the Pokedex List
        this.toastr.warning('Oh Well!', 'Trainer Deleted');
     });
    }
  }

  resetForm(form?: NgForm){
    if (form) form.reset();  // Form?
    this.trainerService.selectedTrainer = <Trainer>{};  // On Reset, New Trainer
  }

}
