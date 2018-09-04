import { Component, OnInit } from '@angular/core';

import { MoveService } from '../../../services/move.service';  // Pokedex Service
import { Move } from '../../../models/move';  // Move Model

import { ToastrService } from 'ngx-toastr';  // Toastr

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'app-move',
  templateUrl: './admin-move.component.html',
  styleUrls: ['./admin-move.component.css']
})

export class AdminMoveComponent implements OnInit {

  constructor(private moveService: MoveService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getMove();  // Get Move at the start
  }

  getMove(){
     this.moveService.getMove()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
      this.moveService.moveList = res as any;  // Response as Service Move = List
    });
  }

  addMove(form: NgForm){
    if (form.value._id) {  // Already Move ID? -> Update
      this.moveService.updateMove(form.value)  // Update Move with Form Values
       .subscribe (res => {  // Subscribe to the Server Response
         this.toastr.info('Good!', 'Move Updated!');
         this.resetForm(form);  // Reset Form
         this.getMove();
       })
    }
    else {  // Not Move ID? Oh, New Move?
      this.moveService.addMove(form.value)  // Add Move with Form Values
      .subscribe(res => {  // Subscribe to the Server Response
        this.toastr.success('Great!', 'Move Added');
        this.resetForm(form);  // Reset Form
        this.getMove();
      });
    }
  }

  updateMove(move: Move){  // NEW Move Object with the Move -> selected Move
    this.moveService.selectedMove = Object.assign({}, move);;
  }

  deleteMove(_id: string){  // Need the Move ID

    if(confirm("Are You sure?")){
    this.moveService.deleteMove(_id)  // Delete Move by ID
     .subscribe( res => {  // Subscribe to the Server Response
        this.getMove();  // Once Deleted, Update the Pokedex List
        this.toastr.warning('Oh Well!', 'Move Deleted');
     });
    }
  }

  resetForm(form?: NgForm){
    if (form) form.reset();  // Form?
    this.moveService.selectedMove = <Move>{};  // On Reset, New Move
  }

}
