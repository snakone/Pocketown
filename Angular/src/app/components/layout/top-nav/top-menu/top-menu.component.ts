import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})

export class TopMenuComponent implements OnInit {

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {}

}
