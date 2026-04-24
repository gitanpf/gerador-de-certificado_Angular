import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { UiBase } from './_components/ui-base/ui-base';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, UiBase],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
