import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Forms
import { FormsModule } from '@angular/forms';

// Main
import { AppComponent } from './app.component';

// Material
import { MaterialModule } from './material/material.module';

// Routes
import { RoutingModule } from './routes/routes';

// Toastr
import { ToastrModule } from 'ngx-toastr';

// App Layout
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { TopMenuComponent } from './components/layout/top-nav/top-menu/top-menu.component';
import { GridComponent } from './components/layout/grid/grid.component';
import { FixedNavComponent } from './components/layout/fixed-nav/fixed-nav.component';
import { FooterNavComponent } from './components/layout/footer-nav/footer-nav.component';
import { FooterMenuComponent } from './components/layout/footer-nav/footer-menu/footer-menu.component';

// Dinamic Components
import { WelcomeComponent } from './components/dynamic/welcome/welcome.component';
import { AboutComponent } from './components/dynamic/about/about.component';
import { PokedexComponent } from './components/dynamic/pokedex/pokedex.component';
import { PokemonComponent } from './components/admin/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent, TopNavComponent, TopMenuComponent, GridComponent,
    FixedNavComponent, FooterNavComponent, FooterMenuComponent,
    WelcomeComponent, AboutComponent, PokedexComponent, PokemonComponent,
],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, RoutingModule,
    FormsModule, HttpClientModule,
    ToastrModule.forRoot({  // Apply to all Toastr
      timeOut: 3000,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
