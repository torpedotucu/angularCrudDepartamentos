import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"create",component:CreateComponent
  },
  {
    path:"detalles/:id/:nombre/:localidad",component:DetallesComponent
  },
  {
    path:"edit/:id",component:EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
