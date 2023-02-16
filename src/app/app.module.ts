import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGlossarioComponent } from './components/list-glossario/list-glossario.component';
import { InfoGlossarioComponent } from './components/info-glossario/info-glossario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditGlossarioComponent } from './components/edit-glossario/edit-glossario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGlossarioComponent,
    InfoGlossarioComponent,
    EditGlossarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
