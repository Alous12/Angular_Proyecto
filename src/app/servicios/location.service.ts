import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/location';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = 'https://rickandmortyapi.com/api/location';
  constructor(private http:HttpClient) { }

  obtenerUbicaciones(): Observable<Location> {
    return this.http.get<Location>(this.apiUrl);
  }

  obtenerUbicacionesFiltradas(filtros: { [key: string]: string }): Observable<Location> {
    const queryParams = new URLSearchParams(filtros).toString();
    return this.http.get<Location>(`${this.apiUrl}/?${queryParams}`);
}

}
