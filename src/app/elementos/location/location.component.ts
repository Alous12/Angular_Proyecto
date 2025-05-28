import { Component, Input } from '@angular/core';
import { resultUbi } from '../../interfaces/location';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  @Input() ubicacion: resultUbi | undefined;
}
