import { Component, inject } from '@angular/core';
import { LocationComponent } from '../../elementos/location/location.component';
import { LocationService } from '../../servicios/location.service';
import { resultUbi } from '../../interfaces/location';

@Component({
  selector: 'app-ubicacion',
  imports: [LocationComponent],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.scss'
})
export class UbicacionComponent {
  ListadoUbicaciones: resultUbi[] = [];
  locationService : LocationService = inject(LocationService);
  constructor() {
    this.locationService.obtenerUbicaciones().subscribe(data => this.ListadoUbicaciones = data['results']);
  }
}
