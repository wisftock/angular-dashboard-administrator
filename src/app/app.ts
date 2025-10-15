import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiModule } from './ui/ui-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('bases');
}
