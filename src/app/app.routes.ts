import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { EuroPesetasComponent } from './euro-pesetas/euro-pesetas.component';
import { PersonasListComponent, PersonasViewComponent, PersonasEditComponent, PersonasAddComponent } from './personas/personas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'demos', component: DemosComponent },
  { path: 'chisme/de/monedas', component: EuroPesetasComponent },
  { path: 'personas', component: PersonasListComponent },
  { path: 'personas/add', component: PersonasAddComponent },
  { path: 'personas/:id/edit', component: PersonasEditComponent },
  { path: 'personas/:id', component: PersonasViewComponent },
  { path: 'personas/:id/:kk', component: PersonasViewComponent },
  { path: 'clientes', children: [
    { path: '', component: PersonasListComponent },
    { path: 'add', component: PersonasAddComponent },
    { path: ':id/edit', component: PersonasEditComponent },
    { path: ':id', component: PersonasViewComponent },
    { path: ':id/:kk', component: PersonasViewComponent },
  ]},
  { path: 'pepito/grillo', redirectTo: '/personas/2' },
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];
