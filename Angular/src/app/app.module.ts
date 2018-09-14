import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';

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

// Admin
import { AdminPokemonComponent } from './components/admin/pokemon/admin-pokemon.component';
import { AdminMoveComponent } from './components/admin/move/admin-move.component';
import { AdminPokeItemComponent } from './components/admin/poke-item/admin-poke-item.component';

// App Layout //
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { TopMenuComponent } from './components/layout/top-nav/top-menu/top-menu.component';
import { GridComponent } from './components/layout/grid/grid.component';
import { FixedNavComponent } from './components/layout/fixed-nav/fixed-nav.component';
import { FooterNavComponent } from './components/layout/footer-nav/footer-nav.component';
import { FooterMenuComponent } from './components/layout/footer-nav/footer-menu/footer-menu.component';

// Dynamic Components //

// Home
import { WelcomeComponent } from './components/dynamic/welcome/welcome.component';
import { EventsComponent } from './components/dynamic/welcome/events/events.component';
import { BannerComponent } from './components/dynamic/welcome/banner/banner.component';
import { DownloadComponent } from './components/dynamic/welcome/download/download.component';

//Trainer
import { ProfileComponent } from './components/dynamic/profile/profile.component';
import { TrainerComponent } from './components/dynamic/profile/trainer/trainer.component';
import { RegisterComponent } from './components/dynamic/profile/register/register.component';

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
import { MoveComponent } from './components/dynamic/moves/move/move.component';
// Held Items
import { PokeItemsComponent } from './components/dynamic/poke-items/poke-items.component';
import { PokeItemComponent } from './components/dynamic/poke-items/poke-item/poke-item.component';

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

// Pocketown Guides //
import { VictoryRoadComponent } from './components/static/guides/victory-road/victory-road.component';
import { TrainerListComponent } from './components/dynamic/profile/trainer-list/trainer-list.component';
import { PocketownComponent } from './components/dynamic/pocketown/pocketown.component';


@NgModule({
  declarations: [
    AppComponent, TopNavComponent, TopMenuComponent, GridComponent,
    FixedNavComponent, FooterNavComponent, FooterMenuComponent,
    WelcomeComponent, PokedexComponent, PokemonComponent, AdminPokemonComponent,
    TypesComponent, LaboratoryComponent, SearchComponent, ResultComponent,
    StatsComponent, FilteringComponent, EvolutionsComponent,
    StadisticsComponent, BioComponent, MatchComponent, NatureComponent,
    EffortComponent, ItemsComponent, PokemonMovesComponent, MovesComponent,
    AdminMoveComponent, VictoryRoadComponent, EventsComponent, BannerComponent,
    AdminPokeItemComponent, PokeItemsComponent, DownloadComponent, MoveComponent,
    PokeItemComponent, ProfileComponent, TrainerComponent, RegisterComponent, TrainerListComponent, PocketownComponent ],
    
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, RoutingModule,
    FormsModule, HttpClientModule, ReactiveFormsModule,
    ToastrModule.forRoot({  // Apply to all Toastr
      timeOut: 3000,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
