import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: '**', component: PokemonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
