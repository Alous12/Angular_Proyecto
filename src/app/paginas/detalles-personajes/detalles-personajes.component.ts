import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '../../servicios/character.service';
import { Character, results } from '../../interfaces/character';

@Component({
  selector: 'app-detalles-personajes',
  imports: [],
  templateUrl: './detalles-personajes.component.html',
  styleUrl: './detalles-personajes.component.scss'
})
export class DetallesPersonajesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  personajeService: CharacterService = inject(CharacterService);
  detallesPersonaje: results | undefined;

  constructor() {
    const idpPersonaje = Number(this.route.snapshot.params['id']);
      this.personajeService.obtenerPersonajePorId(idpPersonaje).subscribe((personaje) => {
      this.detallesPersonaje = personaje;
      console.log(this.detallesPersonaje);
    });
  }

}
