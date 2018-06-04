import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyCoreModule } from '../my-core';


import { AppComponent } from './app.component';
import { ComunesModule } from './comunes/comunes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MyCoreModule, ComunesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
