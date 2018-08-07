import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from "@angular/material/icon"; // Custom Icon
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  appTitle: string;
  ngVersion: string;  // Angular Version
  appMail: string;  // Personal Mail

  logoURL: string;

  constructor( private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer  // Add a custom Icon.svg
            ) {

    this.appTitle = "Pocketown";
    this.ngVersion = "Angular 6";
    this.logoURL = "../../../../../assets/images/logo.png";

    // Icon Register

     this.matIconRegistry.addSvgIcon("bulbasaur", this.domSanitizer
     .bypassSecurityTrustResourceUrl("../../../../../assets/icons/bulbasaur.svg")
     );

     this.matIconRegistry.addSvgIcon("pikachu", this.domSanitizer
     .bypassSecurityTrustResourceUrl("../../../../../assets/icons/pikachu.svg")
     );

     this.matIconRegistry.addSvgIcon("admin", this.domSanitizer
     .bypassSecurityTrustResourceUrl("../../../../../assets/icons/admin.svg")
     );

     this.matIconRegistry.addSvgIcon("charmander", this.domSanitizer
     .bypassSecurityTrustResourceUrl("../../../../../assets/icons/charmander.svg")
     );

     this.matIconRegistry.addSvgIcon("psyduck", this.domSanitizer
     .bypassSecurityTrustResourceUrl("../../../../../assets/icons/psyduck.svg")
     );

     this.matIconRegistry.addSvgIcon("trainer", this.domSanitizer
     .bypassSecurityTrustResourceUrl("../../../../../assets/icons/trainer.svg")
     );

     this.matIconRegistry.addSvgIcon("laboratory", this.domSanitizer
     .bypassSecurityTrustResourceUrl("../../../../../assets/icons/laboratory.svg")
     );

  }

  ngOnInit() {}

}
