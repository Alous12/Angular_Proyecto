import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, results } from '../interfaces/character';
//import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { 

  }

  obtenerPersonajes(): Observable<Character> {
    return this.http.get<Character>('https://rickandmortyapi.com/api/character');
    
  }

  
}
