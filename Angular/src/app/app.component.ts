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
  title:string;

  constructor(private matIconRegistry: MatIconRegistry, // Add a custom Icon.svg)
              private domSanitizer: DomSanitizer,
              private trainerService: TrainerService,
              public authService: AuthService){
  this.title ="Pocketown";

  authService.handleAuthentication();  // Method Need to Log in with Auth0

  if (authService.isAuthenticated()) {  // No Profile?
      authService.getProfile((err, profile) => {  // Get the Profile
      // After We get the Trainer We check it
      trainerService.checkTrainer(profile);
       });
    }

  // Icon Register

   this.matIconRegistry.addSvgIcon("bulbasaur", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/bulbasaur.svg")
   );

   this.matIconRegistry.addSvgIcon("pikachu", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/pikachu.svg")
   );

   this.matIconRegistry.addSvgIcon("admin", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/admin.svg")
   );

   this.matIconRegistry.addSvgIcon("charmander", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/charmander.svg")
   );

   this.matIconRegistry.addSvgIcon("psyduck", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/psyduck.svg")
   );

   this.matIconRegistry.addSvgIcon("trainer", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/trainer.svg")
   );

   this.matIconRegistry.addSvgIcon("laboratory", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/laboratory.svg")
   );

   this.matIconRegistry.addSvgIcon("move", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/move.svg")
   );

   this.matIconRegistry.addSvgIcon("tools", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/tools.svg")
   );

   this.matIconRegistry.addSvgIcon("database", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/database.svg")
   );

   this.matIconRegistry.addSvgIcon("guides", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/guides.svg")
   );

   this.matIconRegistry.addSvgIcon("victory-road", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/victory-road.svg")
   );

   this.matIconRegistry.addSvgIcon("poke-item", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/poke-item.svg")
   );

   this.matIconRegistry.addSvgIcon("exit", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/exit.svg")
   );

   this.matIconRegistry.addSvgIcon("pocketown", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/pocketown.svg")
   );

   this.matIconRegistry.addSvgIcon("trainers", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/trainers.svg")
   );

   this.matIconRegistry.addSvgIcon("game", this.domSanitizer
   .bypassSecurityTrustResourceUrl("../assets/icons/game.svg")
   );

  }
}
