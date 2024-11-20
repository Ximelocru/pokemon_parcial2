import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemonListar',
  templateUrl: './pokemonListar.component.html',
  styleUrls: ['./pokemonListar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemones: Array<PokemonDetailDto> = [];
  selectedPokemon!: PokemonDetailDto;
  selected = false;
  cantidades:Map<String,Number>= new Map()
  

  constructor(private pokemon: PokemonService) { }
  getPokemones(): void{
    this.pokemones=  this.pokemon.getPokemons()
  }
  getCantidad(): void{
    for(let p of this.pokemones){
      for(let s of p.types){
        if (s.type.name in this.cantidades.keys){
          this.cantidades.set(s.type.name,1)
        }
        else {
        
          //this.cantidades.set(s.type.name,this.cantidades.get(s.type.name))

        }
      }
    }
  }


  ngOnInit() {
    this.getPokemones()
  }
  onSelected(pokemon:PokemonDetailDto ): void{
    this.selected = true;
    this.selectedPokemon = pokemon;
  }

}
