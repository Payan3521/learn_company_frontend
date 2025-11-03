import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: false,
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {

  @Input() label : string = 'Label';
  @Input() placeholder : string = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() id : string = '';
  @Input() required : boolean = false;
  @Input() disabled : boolean = false;
  @Input() errorMessage : string = '';
  @Input() value : string = '';

  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string) {
    this.value = value;
    this.valueChange.emit(value);
  }
}