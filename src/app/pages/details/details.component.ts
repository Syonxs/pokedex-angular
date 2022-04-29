import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { forkJoin } from 'rxjs'
import { PokeapiService } from 'src/app/shared/services/pokeapi.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlSpecies: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any
  public apiError: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeapiService,
    private titleHandler: Title,
  ) {}

  ngOnInit(): void {
    this.pokemon
    this.getPokemonByName()
  }

  public capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  public getPokemonByName() {
    const name = this.activatedRoute.snapshot.params['name']
    const pokemon = this.pokeApiService.getPokemon(this.urlPokemon, name)

    const species = this.pokeApiService.getPokemon(this.urlSpecies, name)

    return forkJoin([pokemon, species]).subscribe(
      (res: any) => {
        this.pokemon = res
        console.log(this.pokemon)
        this.titleHandler.setTitle(`Pokedex | ${this.capitalizeFirstLetter(this.pokemon[0].name)}`)
      },
      (error: any) => {
        this.apiError = true
      },
    )
  }
}

