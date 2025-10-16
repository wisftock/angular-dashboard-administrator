import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  imports: [CommonModule, NgClass],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UIButton {
  @Input() label = 'Click me';
  @Input() icon?: string;
  @Input() primary = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() backgroundColor?: string;

  @Output() onClick = new EventEmitter<Event>();

  get classes(): string[] {
    const base = this.primary
      ? 'bg-sky-500 text-white border border-sky-500'
      : 'bg-gray-200 text-gray-700 border border-gray-300';

    const hover = this.disabled
      ? ''
      : this.primary
        ? 'hover:bg-sky-600 border border-sky-500'
        : 'hover:bg-gray-300 border border-gray-300';

    return [base, hover, this.disabledClass, this.sizeClass];
  }

  get sizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'w-[25%]';
      case 'large':
        return 'w-[100%]';
      default:
        return 'w-[50%]';
    }
  }

  get disabledClass(): string {
    return this.disabled ? 'opacity-50 cursor-not-allowed' : '';
  }
}
