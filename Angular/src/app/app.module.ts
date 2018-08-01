import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
