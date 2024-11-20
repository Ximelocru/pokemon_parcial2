import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListarComponent }from './pokemonListar/pokemonListar.component';
import { PokemonDetalleComponent } from './pokemonDetalle/pokemonDetalle.component';


const routes: Routes = [
    {
        path: 'list',
        component: PokemonListarComponent
    },
    {
        path: ':id',
        component: PokemonDetalleComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
