import { Injectable } from '@angular/core';
import { Episode } from '../interfaces/episode';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { 

  }

  ObtenerEpisodios(): Observable<Episode> {
    return this.http.get<Episode>('https://rickandmortyapi.com/api/episode');
    
  }
}