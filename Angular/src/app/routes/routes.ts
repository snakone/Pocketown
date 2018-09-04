import { Routes, RouterModule } from '@angular/router';

import { NgModule, ModuleWithProviders } from '@angular/core';

import { WelcomeComponent } from '../components/dynamic/welcome/welcome.component';
import { PokedexComponent } from '../components/dynamic/pokedex/pokedex.component';
import { PokemonComponent } from '../components/dynamic/pokedex/pokemon/pokemon.component';
import { AdminPokemonComponent } from '../components/admin/pokemon/admin-pokemon.component';
import { AdminMoveComponent } from '../components/admin/move/admin-move.component';
import { AdminpokeItemComponent } from '../components/admin/poke-item/admin-poke-item.component';
import { LaboratoryComponent } from '../components/dynamic/laboratory/laboratory.component';
import { ResultComponent } from '../components/dynamic/laboratory/result/result.component';
import { MovesComponent } from '../components/dynamic/moves/moves.component';
import { pokeItemsComponent } from '../components/dynamic/poke-items/poke-items.component';
import { VictoryRoadComponent } from '../components/static/guides/victory-road/victory-road.component';


const Routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'pokedex', component: PokedexComponent },  // Pokedex
  { path: 'laboratory', component: LaboratoryComponent },  // Laboratory
  { path: 'moves', component: MovesComponent },  // Moves
  { path: 'held-items', component: pokeItemsComponent },  // Pokémon Held Items
  { path: 'laboratory/result', component: ResultComponent },  // Laboratory Results
  { path: 'pokedex/:pokemon', component: PokemonComponent },  // Single Pokemon
  { path: 'guides/victory-road', component: VictoryRoadComponent },  // Victory Road Guide
  { path: 'admin/pokemon', component: AdminPokemonComponent },  // Admin Pokemon
  { path: 'admin/move', component: AdminMoveComponent },  // Admin Pokemon Moves
  { path: 'admin/pokeItem', component: AdminpokeItemComponent },  // Admin Pokemon Moves
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // Default Route
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
