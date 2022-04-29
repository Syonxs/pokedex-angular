import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private readonly endpoint = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) {}

  public getPokemons() {
    return this.http.get(`${this.endpoint}`).pipe(
      tap((pokemons: any) => pokemons),
      tap((pokemons: any) => {
        pokemons.results.map((pokemon: any) => {
          this.getPokemon(this.endpoint, pokemon.name).subscribe((response: any) => {
            pokemon.details = response
          })
        })
      }),
    )
  }

  public getPokemon(url: string, name: string) {
    return this.http.get(`${url}/${name}`)
  }
}

