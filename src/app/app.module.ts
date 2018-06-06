import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyCoreModule, LoggerService, ERROR_LEBEL } from '../my-core';


import { AppComponent } from './app.component';
import { ComunesModule } from './comunes/comunes.module';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { NotificationComponent } from './notification/notification.component';
import { EuroPesetasComponent } from './euro-pesetas/euro-pesetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    NotificationComponent,
    EuroPesetasComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MyCoreModule, ComunesModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEBEL, useValue: 5 },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
