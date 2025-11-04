import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: false,
  templateUrl: './form-field.html',
  styleUrls: ['./form-field.scss'],
})
export class FormField {

  // texto que se mostrará en el app-label
  @Input() label : string = 'Label';

  // placeholder del input
  @Input() placeholder : string = '';

  // tipo de input: text, password, email, etc.
  @Input() type: 'text' | 'password' | 'email' = 'text';

  // para enlazar el label con el input
  @Input() id : string = '';

  // indica si el campo es obligatorio, muestra un asterisco en el label
  @Input() required : boolean = false;

  // indica si el campo está deshabilitado, y deshabilita el input
  @Input() disabled : boolean = false;

  // mensaje de error que se mostrará debajo del input
  @Input() errorMessage : string = '';

  // permite mostrar y actualizar el valor del input
  @Input() value : string = '';

  // se emite cuando cambia el valor del input
  @Output() valueChange = new EventEmitter<string>();

  // método para manejar el cambio de valor del input
  onValueChange(value: string) {
    this.value = value;
    this.valueChange.emit(value);
  }
}