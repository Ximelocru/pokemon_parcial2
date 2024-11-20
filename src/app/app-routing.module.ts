import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListarComponent } from './pokemon/pokemonListar/pokemonListar.component';


const routes: Routes = [
  { path: '', component:  PokemonListarComponent},
  { path: ':type',  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
