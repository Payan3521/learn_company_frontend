import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: false,
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  @Input() name: 'lock' | 'user' | 'email' = 'lock';
  @Input() size: number = 24;
  @Input() color: string = 'currentColor';
}