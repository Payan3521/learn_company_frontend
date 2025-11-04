import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.html',
  styleUrls: ['./input.scss'],
})
export class InputComponent {

  // Identificador único del input, sirve para asociar labels
  @Input() id: string = '';

  // Valor del input, Lo que el usuario ha escrito
  @Input() value : string = '';

  // Texto que aparece cuando el input está vacío
  @Input() placeholder : string = 'Escribe aquí...';

  // Tipo de input, como 'text', 'password', 'email', etc.
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';

  // Indica si el input está deshabilitado
  @Input() disabled : boolean = false;

  // Evento que se emite cuando el valor del input cambia
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  // Maneja el evento de entrada y emite el nuevo valor
  onInput(event: Event): void {
    // Obtiene el valor del input y lo emite
    const inputElement = (event.target as HTMLInputElement).value; 

    //Envía el nuevo valor al componente padre
    this.valueChange.emit(inputElement);
  }
}