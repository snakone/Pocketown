import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

// HTTP
import { HttpClientModule } from "@angular/common/http";

//Admin
import { AdminPokemonComponent } from './components/admin/pokemon/admin-pokemon.component';

// App Layout //
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { TopMenuComponent } from './components/layout/top-nav/top-menu/top-menu.component';
import { GridComponent } from './components/layout/grid/grid.component';
import { FixedNavComponent } from './components/layout/fixed-nav/fixed-nav.component';
import { FooterNavComponent } from './components/layout/footer-nav/footer-nav.component';
import { FooterMenuComponent } from './components/layout/footer-nav/footer-menu/footer-menu.component';

// Dinamic Components //
import { WelcomeComponent } from './components/dynamic/welcome/welcome.component';
import { AboutComponent } from './components/dynamic/about/about.component';
// Pokedex
import { PokedexComponent } from './components/dynamic/pokedex/pokedex.component';
import { PokemonComponent } from './components/dynamic/pokedex/pokemon/pokemon.component';
// Laboratory
import { LaboratoryComponent } from './components/dynamic/laboratory/laboratory.component';
import { SearchComponent } from './components/dynamic/laboratory/search/search.component';
import { ResultComponent } from './components/dynamic/laboratory/result/result.component';
import { FilteringComponent } from './components/dynamic/laboratory/filtering/filtering.component';
// Moves
import { MovesComponent } from './components/dynamic/moves/moves.component';

// Static Components //
import { StatsComponent } from './components/static/stats/stats.component';
import { TypesComponent } from './components/static/types/types.component';
import { EvolutionsComponent } from './components/static/evolutions/evolutions.component';

// Single Pokemon Components //
import { BioComponent } from './components/dynamic/pokedex/pokemon/bio/bio.component';
import { StadisticsComponent } from './components/dynamic/pokedex/pokemon/stadistics/stadistics.component';
import { MatchComponent } from './components/dynamic/pokedex/pokemon/match/match.component';
import { NatureComponent } from './components/dynamic/pokedex/pokemon/nature/nature.component';
import { EffortComponent } from './components/dynamic/pokedex/pokemon/effort/effort.component';
import { ItemsComponent } from './components/dynamic/pokedex/pokemon/items/items.component';
import { PokemonMovesComponent } from './components/dynamic/pokedex/pokemon/moves/pokemon-moves.component';
import { AdminMoveComponent } from './components/admin/move/admin-move.component';
import { VictoryRoadComponent } from './components/static/guides/victory-road/victory-road.component';


@NgModule({
  declarations: [
    AppComponent, TopNavComponent, TopMenuComponent, GridComponent,
    FixedNavComponent, FooterNavComponent, FooterMenuComponent,
    WelcomeComponent, AboutComponent, PokedexComponent, PokemonComponent,
    AdminPokemonComponent, TypesComponent, LaboratoryComponent, SearchComponent,
    ResultComponent, StatsComponent, FilteringComponent, EvolutionsComponent,
    StadisticsComponent, BioComponent, MatchComponent, NatureComponent,
    EffortComponent, ItemsComponent, PokemonMovesComponent, MovesComponent,
    AdminMoveComponent,
    VictoryRoadComponent

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
