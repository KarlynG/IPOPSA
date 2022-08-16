import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  handleSearch(value: string) {
    console.log(value);
    this.Filtro_valor = value;
  }

  Filtro_valor = ' ';

  constructor(public authService: AuthService) {}

  title = 'client';
  courses: any = [];

  ngOnInit(): void {}
}
