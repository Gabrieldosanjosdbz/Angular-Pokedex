import { HttpClient } from '@angular/common/http';  //importante a classe do moduleHTTP
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';      //importando o Observable que vem de uma classe especifica do JS
import { environment } from 'src/environments/environment'  //importando o arquivo environment
import { PokemonData } from 'src/app/models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL = ''
  private pokeData: PokemonData | any

  constructor(private http: HttpClient) {   //injeção do HttpClient 
    this.baseURL = environment.pokeApi      //pegando a url do environment
  }

  getPokemon(pokemonName:string): Observable<PokemonData> { //to deixando explicito que ele retorna um Observable e vai vigiar um pokenData
    
    this.pokeData = this.http.get(`${this.baseURL}${pokemonName}`)
    
    return this.pokeData

  }

}
