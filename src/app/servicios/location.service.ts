import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/location';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  obtenerUbicaciones(): Observable<Location> {
    return this.http.get<Location>('https://rickandmortyapi.com/api/location');
  }

  obtenerUbicacionesFiltradas(filtros: { [key: string]: string }): Observable<Location> {
  const queryParams = new URLSearchParams(filtros).toString();
  return this.http.get<Location>('https://rickandmortyapi.com/api/location');
}

}
