import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  subtitle: string;
  description: string;
  url: string;

  constructor() {
    this.title = 'Toto';
    this.subtitle = 'Tutu';
    this.description = 'Lolo';
    this.url = 'https://google.com';
  }

  ngOnInit(): void {}
}
