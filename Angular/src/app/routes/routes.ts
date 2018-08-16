import { Routes, RouterModule } from '@angular/router';

import { NgModule, ModuleWithProviders } from '@angular/core';

import { WelcomeComponent } from '../components/dynamic/welcome/welcome.component';
import { AboutComponent } from '../components/dynamic/about/about.component';
import { PokedexComponent } from '../components/dynamic/pokedex/pokedex.component';
import { PokemonComponent } from '../components/dynamic/pokedex/pokemon/pokemon.component';
import { AdminPokemonComponent } from '../components/admin/pokemon/admin-pokemon.component';
import { AdminMoveComponent } from '../components/admin/move/admin-move.component';
import { LaboratoryComponent } from '../components/dynamic/laboratory/laboratory.component';
import { ResultComponent } from '../components/dynamic/laboratory/result/result.component';


const Routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'pokedex', component: PokedexComponent },  // Pokedex
  { path: 'laboratory', component: LaboratoryComponent },  // Laboratory
  { path: 'laboratory/result', component: ResultComponent },  // Laboratory Results
  { path: 'pokedex/:pokemon', component: PokemonComponent },  // Single Pokemon
  { path: 'admin/pokemon', component: AdminPokemonComponent },  // Admin Pokemon
  { path: 'admin/move', component: AdminMoveComponent },  // Admin Pokemon Moves
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // Default Route
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
