import { Component } from '@angular/core';
import { CalendarioComponent } from './calendario/calendario.component';

@Component({
  selector: 'app-root',
  imports: [CalendarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'calendar';
}
