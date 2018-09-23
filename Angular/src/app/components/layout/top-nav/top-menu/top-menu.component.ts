import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service
import { AuthService } from '../../../../services/auth.service';  // Trainer Service

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})

export class TopMenuComponent implements OnInit {

  constructor(private trainerService: TrainerService,
              private authService: AuthService) {}

  ngOnInit() {}

}

// Main Top MENU within the Top Navigation
