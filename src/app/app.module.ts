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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    NotificationComponent,
    EuroPesetasComponent,
    PERSONAS_COMPONENTS
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    MyCoreModule, ComunesModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEBEL, useValue: 5 },
    { provide: PersonasVMService, useClass: PersonasVMDAOService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
