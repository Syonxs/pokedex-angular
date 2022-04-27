import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { HomeComponent } from 'src/app/pages/home/home.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private homeComponent: HomeComponent) {}

  ngOnInit(): void {}

  public search(value: string) {
    this.homeComponent.handleSearch(value)
  }
}

