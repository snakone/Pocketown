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

  constructor(private authService: AuthService,
              private trainerService: TrainerService,
              private toastr: ToastrService,) { }

  ngOnInit() {}

  logOut():void {  // Log out from Auth0

    this.authService.logout();
    this.toastr.info('','Now You are logged out', {
      timeOut: 10000,
      extendedTimeOut: 5000
    });
    this.trainerService.updateTrainerOnlineStatus(false);  // Update Status to Offline
    this.trainerService.firstLogin = true;  // First Login back to True
  }

}

// Footer MENU - HOME Logo and EXIT (Log out) Button
