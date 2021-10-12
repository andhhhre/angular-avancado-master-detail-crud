import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Remover para usar backend real
import { InMemoryDatabase } from './in-memory-database'; // Remover para usar backend real

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase) // Remover para usar backend real
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
