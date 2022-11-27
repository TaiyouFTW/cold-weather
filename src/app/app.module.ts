import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './_shared/modules/material.module';
import { GlassCardComponent } from './_shared/components/glass-card/glass-card.component';
import { WeatherComponent } from './_shared/components/weather/weather.component';
import { FortAwesomeModule } from './_shared/modules/fortawesome.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlassCardComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FortAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
