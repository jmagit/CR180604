import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyCoreModule, LoggerService, ERROR_LEBEL } from '../my-core';


import { AppComponent } from './app.component';
import { ComunesModule } from './comunes/comunes.module';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { NotificationComponent } from './notification/notification.component';
import { EuroPesetasComponent } from './euro-pesetas/euro-pesetas.component';
import { PERSONAS_COMPONENTS } from './personas/personas.component';
import { PersonasVMService, PersonasVMDAOService } from './personas/personas.service';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    NotificationComponent,
    EuroPesetasComponent,
    PERSONAS_COMPONENTS,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    MyCoreModule, ComunesModule, RouterModule.forRoot(routes),
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEBEL, useValue: 5 },
    { provide: PersonasVMService, useClass: PersonasVMDAOService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
