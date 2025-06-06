import { Routes } from '@angular/router';
import { PaginaNoEncontrontadaComponent } from './paginas/pagina-no-encontrontada/pagina-no-encontrontada.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CharacterComponent } from './elementos/character/character.component';
import { PersonajesComponent } from './paginas/personajes/personajes.component';
import { UbicacionComponent } from './paginas/ubicacion/ubicacion.component';
import { EpisodiosComponent } from './paginas/episodios/episodios.component';
import { DetallesPersonajesComponent } from './paginas/detalles-personajes/detalles-personajes.component';

export const routes: Routes = [

    {path: 'inicio', component: InicioComponent},
    {path: 'character', component: CharacterComponent},
    {path: 'personajes', component: PersonajesComponent},
    {path: 'ubicacion', component: UbicacionComponent},
    {path: 'episodios', component: EpisodiosComponent},
    {path: 'detalles-personajes/:id', component: DetallesPersonajesComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: PaginaNoEncontrontadaComponent},
    
];
