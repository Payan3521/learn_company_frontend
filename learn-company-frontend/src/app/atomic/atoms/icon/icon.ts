import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: false,
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {

  // defino que icono se va a mostrar
  @Input() name: 'lock' | 'user' | 'email' = 'lock';

  // defino el tamaño del icono
  @Input() size: number = 24; 

  // defino el color del icono
  @Input() color: string = ''; 

  // clase para el tamaño del icono
  get sizeClass(): string {
    if (this.size <= 16) return 'small';
    if (this.size >= 32) return 'large';
    return 'medium';
  }
}