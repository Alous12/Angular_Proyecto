import { Component, inject } from '@angular/core';
import { EpisodeComponent } from '../../elementos/episode/episode.component';
import { EpisodeService } from '../../servicios/episode.service';
import { resultsEpi } from '../../interfaces/episode';

@Component({
  selector: 'app-episodios',
  imports: [EpisodeComponent],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.scss'
})
export class EpisodiosComponent {
  ListadoEpisodios: resultsEpi[] = [];
  episodeService: EpisodeService=inject(EpisodeService);
  constructor() {
    this.episodeService.ObtenerEpisodios().subscribe(data => this.ListadoEpisodios = data['results']);
  }

}
