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
    this.trainerService.getFireTrainers()  // HTTP POST to Server
    .subscribe(res => {  // Subscribe to the Server Response
     this.trainerService.trainerList = res as any;  // Response as Service Trainer = List
   });
  }

  addFireTrainer(form: NgForm){
    // if (form.value.id) {  // Already Trainer ID? -> Update
    //   this.trainerService.updateFireTrainer(form.value);  // Update Trainer with Form Values
    //   this.toastr.info('Good!', 'Trainer Updated!');
    //   this.resetForm(form);  // Reset Form
    // }
    // else {  // Not Trainer ID? Oh, New Trainer?
      this.trainerService.addFireTrainer(form.value)  // Add Trainer with Form Values
        this.toastr.success('Great!', 'Trainer Added');
        this.resetForm(form);  // Reset Form
    // }
  }

  updateFireTrainer(trainer: Trainer){  // NEW Trainer Object with the Trainer -> selected Trainer
    this.trainerService.selectedTrainer = Object.assign({}, trainer);;
  }

  deleteFireTrainer(trainer: Trainer){  // Need the Trainer ID
    if(confirm("Are You sure?")){
    this.trainerService.deleteFireTrainer(trainer);  // Delete Trainer by ID
    this.toastr.warning('Oh Well!', 'Trainer Deleted');
    }
  }

  resetForm(event,form?: NgForm){
    event.preventDefault();
    if (form) form.reset();  // Form?
    this.trainerService.selectedTrainer = <Trainer>{};  // On Reset, New Trainer
  }

}
