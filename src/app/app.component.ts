import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponentComponent } from './person-component/person-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'y';
}
