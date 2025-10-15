import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  imports: [NgClass],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UiButton {
  @Input() label = 'Click me';
  @Input() icon?: string;
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
}
