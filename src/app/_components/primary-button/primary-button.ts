import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css',
})
export class PrimaryButton {
  @Input() textoBotao: string = '';
  @Input() disable: boolean | null = false;
}
