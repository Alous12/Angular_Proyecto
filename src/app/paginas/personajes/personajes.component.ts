import { Component, inject } from '@angular/core';
import { CharacterComponent } from '../../elementos/character/character.component';
import { Character, results } from '../../interfaces/character';
import { CharacterService } from '../../servicios/character.service';
@Component({
  selector: 'app-personajes',
  imports: [CharacterComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {
  ListadoPersonajes: results[] = [];
  characterService: CharacterService = inject(CharacterService);
  constructor() {
    this.characterService.obtenerPersonajes().subscribe(data => this.ListadoPersonajes = data['results']);
    
  }
}
