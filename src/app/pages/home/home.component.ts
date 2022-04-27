import { Component, OnInit } from '@angular/core'
import { PokeapiService } from 'src/app/shared/services/pokeapi.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pokemons: any

  public filteredPokemons: any

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapiService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons.results
      this.filteredPokemons = this.pokemons
    })
  }

  public handleSearch(search: string) {
    const filter = this.pokemons.filter((res: any) => {
      return !res.name.indexOf(search.toLowerCase())
    })

    this.filteredPokemons = filter
  }
}
