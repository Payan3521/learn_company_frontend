import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: false,
  templateUrl: './label.html',
  styleUrls: ['./label.scss'],
})
export class Label {

  // sirve para definir el texto de la etiqueta
  @Input() label : string = 'Etiqueta';

  // se usa para enlazar la etiqueta con un input
  @Input() forId : string = '';

  // indica si el campo es obligatorio
  @Input() required : boolean = false;

  // define el tamaño de la etiqueta
  @Input() size : 'small' | 'medium' | 'large' = 'medium';
}