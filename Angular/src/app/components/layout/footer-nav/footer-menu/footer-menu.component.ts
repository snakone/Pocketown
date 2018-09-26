import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';  // Toastr

import { AuthService } from '../../../../services/auth.service';
import { TrainerService } from '../../../../services/trainer.service';

@Component({
  selector: 'footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent implements OnInit {

  constructor(public authService: AuthService,
              private trainerService: TrainerService,
              private toastr: ToastrService,) { }

  ngOnInit() {}

  logOut():void {  // Log out from Auth0
    this.trainerService.updateTrainerOnlineStatus(false);  // Update Status to Offline
    this.trainerService.firstLogin = true;  // First Login back to True
    this.authService.logout();
    this.toastr.error('','Now You are logged out', {
      timeOut: 10000,
      extendedTimeOut: 5000
    });

  }

}

// Footer MENU - HOME Logo and EXIT (Log out) Button
