import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, results } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<Character> {
    return this.http.get<Character>('https://rickandmortyapi.com/api/character');
    
  }
}
