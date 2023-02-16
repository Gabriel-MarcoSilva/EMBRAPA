import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlossarioRoutingModule } from './glossario-routing.module';
import { GlossarioComponent } from './glossario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GlossarioComponent,
  ],
  imports: [
    CommonModule,
    GlossarioRoutingModule,
    ReactiveFormsModule
  ]
})
export class GlossarioModule { }
