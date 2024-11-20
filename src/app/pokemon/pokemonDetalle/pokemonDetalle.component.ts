import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemonDetalle',
  templateUrl: './pokemonDetalle.component.html',
  styleUrls: ['./pokemonDetalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {
  pokemonId!: string;
  @Input() pokemondetail!: PokemonDetailDto;
  constructor() { }

  ngOnInit() {
  }

}
