import { Component } from '@angular/core';

import { MatIconRegistry } from "@angular/material/icon"; // Custom Icon
import { DomSanitizer } from "@angular/platform-browser";

import { AuthService } from './services/auth.service';  // Auth0 Service
import { TrainerService } from './services/trainer.service';  // Trainer Service

@Component({
  selector: 'app-pocketown',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private matIconRegistry: MatIconRegistry, // Add a custom Icon.svg
              private domSanitizer: DomSanitizer,
              public authService: AuthService,
              public trainerService: TrainerService){

  authService.handleAuthentication();  // Method Need to Log in with Auth0

  // Custom Icon Register to use in whole APP
   this.matIconRegistry.addSvgIcon("bulbasaur", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/bulbasaur.svg"));  // Bulbasaur
   this.matIconRegistry.addSvgIcon("pikachu", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/pikachu.svg"));  // Pikachu
   this.matIconRegistry.addSvgIcon("admin", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/admin.svg"));  // Admin
   this.matIconRegistry.addSvgIcon("charmander", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/charmander.svg"));  // Charmander
   this.matIconRegistry.addSvgIcon("psyduck", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/psyduck.svg"));  // Psyduck
   this.matIconRegistry.addSvgIcon("trainer", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/trainer.svg"));  // Trainer (Log In)
   this.matIconRegistry.addSvgIcon("laboratory", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/laboratory.svg"));  // laboratory
   this.matIconRegistry.addSvgIcon("move", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/move.svg"));  // Move
   this.matIconRegistry.addSvgIcon("tools", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/tools.svg"));  // Tools
   this.matIconRegistry.addSvgIcon("database", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/database.svg"));  // Database
   this.matIconRegistry.addSvgIcon("guides", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/guides.svg"));  // Guides
   this.matIconRegistry.addSvgIcon("victory-road", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/victory-road.svg"));  // Victory Road
   this.matIconRegistry.addSvgIcon("poke-item", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/poke-item.svg"));  // Poke Item (Held Item)
   this.matIconRegistry.addSvgIcon("exit", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/exit.svg"));  // Exit (Log out)
   this.matIconRegistry.addSvgIcon("pocketown", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/pocketown.svg"));  // Pocketown
   this.matIconRegistry.addSvgIcon("trainers", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/trainers.svg"));  // Trainer List
   this.matIconRegistry.addSvgIcon("game", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/game.svg"));  // The Game

  }
}
