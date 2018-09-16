import { Component, OnInit, Input } from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service

import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../../static/confirm/confirm.component';

import { Trainer } from '../../../../models/trainer';
import { Pokemon } from '../../../../models/pokemon';

@Component({
  selector: 'trainer-profile',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainer: Trainer;
  urlPokemon: string;
  urlImage: string;

  constructor(private trainerService: TrainerService,
              public dialog: MatDialog) {
        this.urlPokemon = "../../../../../assets/images/pokemon/";
        this.urlImage = "../../../../../assets/images/avatar/";
  }

  ngOnInit() {
    this.trainer = this.trainerService.trainer;
  }

  removePokemon(i){
    const dialogRef = this.dialog.open(ConfirmComponent,{});

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.trainerService.trainerTeam.splice(i,1);
    });

  }

}
