import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListarComponent } from './pokemonListar/pokemonListar.component';
import { PokemonDetalleComponent } from './pokemonDetalle/pokemonDetalle.component';
import { RouterModule } from '@angular/router';
import { PokemonRoutingModule } from './pokemon-routing-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PokemonRoutingModule
  ],
  declarations: [PokemonListarComponent, PokemonDetalleComponent],
  exports: [PokemonListarComponent]
  
})
export class PokemonModule { }
