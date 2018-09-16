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

  ngOnInit() {
  }

  logOut():void {  // Log out from Auth0
    this.trainerService.admin = false;  // Admin False
    this.authService.logout();

    let status = {  // Update Status to Offline
      online: false
    }
    this.trainerService.updateStatus(status).subscribe(res => {});
  }

}
