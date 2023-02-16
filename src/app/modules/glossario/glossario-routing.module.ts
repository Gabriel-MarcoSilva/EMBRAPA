import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossarioComponent } from './glossario.component';

const routes: Routes = [
  {path: "", component: GlossarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlossarioRoutingModule { }
