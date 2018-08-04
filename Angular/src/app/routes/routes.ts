import { Routes, RouterModule } from '@angular/router';

import { NgModule, ModuleWithProviders } from '@angular/core';

import { WelcomeComponent } from '../components/dynamic/welcome/welcome.component';
import { AboutComponent } from '../components/dynamic/about/about.component';
import { PokedexComponent } from '../components/dynamic/pokedex/pokedex.component';
import { PokemonComponent } from '../components/dynamic/pokedex/pokemon/pokemon.component';
import { AdminPokemonComponent } from '../components/admin/pokemon/admin-pokemon.component';


const Routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:pokemon', component: PokemonComponent },
  { path: 'admin/pokemon', component: AdminPokemonComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // Default Route
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
