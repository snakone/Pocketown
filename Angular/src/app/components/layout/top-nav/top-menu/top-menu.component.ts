import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
