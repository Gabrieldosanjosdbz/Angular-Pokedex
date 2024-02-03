import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData = {
    id: 0, 
    name: '',
    sprites: {
      front_default:''
    },
    types: []
  }                               //tipei o objeto, assim evitando erros de leitura da API


  constructor(private services: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons('pikachu')
    
  }

  getPokemons(pesquisa:string){
    this.services.getPokemon(pesquisa.toLowerCase()).subscribe({ //O subscribe serve para a gente ler os dados do Observable

      next: (res) => {        //o next é para caso de sucesso 
        this.pokemon = {
          id: res.id,   //estou selecionando apenas o id da API 
          name: res.name,  //estou selecionando apenas o nome da API 
          sprites: res.sprites,  //estou selecionando apenas a foto sprites da API 
          types: res.types
          
        }

        console.log(this.pokemon)
      },    
      error: (err) => console.log('not found')    //o err é para caso de erro (muito parecido com o promise)
   })
   
  }

}
