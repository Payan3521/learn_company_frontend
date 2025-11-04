import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {
  /** Texto visible del botón */
  @Input() label: string = 'Button';

  /** Tipo de acción semántica (mejor que "variant" en accesibilidad) */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /** Apariencia visual del botón */
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';

  /** Tamaño del botón */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /** Bloquear el botón */
  @Input() disabled: boolean = false;

  /** Hacer que el botón ocupe el 100% del ancho */
  @Input() fullWidth: boolean = false;

  /** Evento al hacer click */
  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
} 