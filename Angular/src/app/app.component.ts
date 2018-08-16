import { Component } from '@angular/core';

import { MatIconRegistry } from "@angular/material/icon"; // Custom Icon
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-pocketown',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;

  constructor(private matIconRegistry: MatIconRegistry, // Add a custom Icon.svg)
              private domSanitizer: DomSanitizer){
  this.title ="Pocketown";

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

  }
}
