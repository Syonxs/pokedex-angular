import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { ContainerComponent } from './components/container/container.component'
import { PokeCardComponent } from './components/poke-card/poke-card.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [HeaderComponent, ContainerComponent, PokeCardComponent],
  exports: [HeaderComponent, PokeCardComponent, ContainerComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class SharedModule {}

