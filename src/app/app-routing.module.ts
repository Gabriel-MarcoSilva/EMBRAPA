import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGlossarioComponent } from './components/edit-glossario/edit-glossario.component';
import { ListGlossarioComponent } from './components/list-glossario/list-glossario.component';

const routes: Routes = [
  { path: '', component: ListGlossarioComponent },
  {
    path: "cad", loadChildren: () => import("./modules/glossario/glossario.module").then(
      (m) => m.GlossarioModule
    )
  },
  { path: "edit", component: EditGlossarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
