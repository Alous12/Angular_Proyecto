import { Component, inject } from '@angular/core';
import { CharacterComponent } from '../../elementos/character/character.component';
import { Character, results } from '../../interfaces/character';
import { CharacterService } from '../../servicios/character.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, FormsModule, CharacterComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {
  ListadoPersonajes: results[] = [];
  searchText = '';
  isLoading = false;
  errorMessage = '';

  characterService: CharacterService = inject(CharacterService);

  constructor() {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.isLoading = true;
    this.characterService.obtenerPersonajes().subscribe({
      next: (data) => {
        this.ListadoPersonajes = data.results;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar personajes';
        this.isLoading = false;
      }
    });
  }

  buscarPersonajes() {
    if (!this.searchText.trim()) {
      this.cargarPersonajes();
      return;
    }

    this.isLoading = true;
    this.characterService.buscarPersonajes(this.searchText).subscribe({
      next: (data) => {
        this.ListadoPersonajes = data.results || [];
        this.isLoading = false;
        if (data.results?.length === 0) {
          this.errorMessage = 'No se encontraron personajes';
        }
      },
      error: (err) => {
        this.errorMessage = 'Personaje no encontrado';
        this.ListadoPersonajes = [];
        this.isLoading = false;
      }
    });
  }

  limpiarBusqueda() {
    this.searchText = '';
    this.errorMessage = '';
    this.cargarPersonajes();
  }
}