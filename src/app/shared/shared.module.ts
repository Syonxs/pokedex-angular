import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { ContainerComponent } from './components/container/container.component'
import { PokeCardComponent } from './components/poke-card/poke-card.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component'

@NgModule({
  declarations: [HeaderComponent, ContainerComponent, PokeCardComponent, ProgressBarComponent],
  exports: [HeaderComponent, PokeCardComponent, ContainerComponent, ProgressBarComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class SharedModule {}

