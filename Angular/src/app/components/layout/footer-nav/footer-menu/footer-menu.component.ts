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

  logOut():void {
    this.trainerService.admin = false;
    this.authService.logout();
    this.toastr.info('','You are now logged out', {
      timeOut: 5000
    });

    let status = {
      online: false
    }
    this.trainerService.updateStatus(status).subscribe(res => {
      console.log("Log ouT!");
    });
  }

}
