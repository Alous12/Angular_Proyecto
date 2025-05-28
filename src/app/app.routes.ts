import { Routes } from '@angular/router';
import { PaginaNoEncontrontadaComponent } from './paginas/pagina-no-encontrontada/pagina-no-encontrontada.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CharacterComponent } from './elementos/character/character.component';
import { PersonajesComponent } from './paginas/personajes/personajes.component';
import { UbicacionComponent } from './paginas/ubicacion/ubicacion.component';

export const routes: Routes = [

    {path: 'inicio', component: InicioComponent},
    {path: 'character', component: CharacterComponent},
    {path: 'personajes', component: PersonajesComponent},
    {path: 'ubicacion', component: UbicacionComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: PaginaNoEncontrontadaComponent},
    
];
