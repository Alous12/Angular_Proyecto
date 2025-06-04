import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
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

  /**
   * Fetches all characters (residents) for a given location by their URLs.
   * @param characterUrls Array of character URLs (from location.residents)
   */
  obtenerPersonajesDeUbicacion(characterUrls: string[]): Observable<any[]> {
    // Map each URL to an HTTP GET Observable
    const requests = characterUrls.map(url => this.http.get<any>(url));
    // Combine all requests into a single Observable emitting an array of results
    return requests.length ? forkJoin(requests) : of([]);
  }



}
