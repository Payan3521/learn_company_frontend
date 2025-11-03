import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: false,
  templateUrl: './label.html',
  styleUrl: './label.scss',
})
export class Label {
  @Input() label : string = 'Etiqueta';
  @Input() forId : string = '';
  @Input() required : boolean = false;
  @Input() size : 'small' | 'medium' | 'large' = 'medium';
}