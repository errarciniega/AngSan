import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MenusComponent } from './pages/menus/menus.component';
import { LoginComponent } from './pages/login/login.component';
import { InfoArticuloComponent } from './pages/info-articulo/info-articulo.component';

const routes: Routes = [
  {
    path: '',
    component: MenusComponent,
    children: [{
                  path: 'articulos',
                  component: ArticulosComponent
                },
                {
                  path: 'admin',
                  component: AdminComponent
                },
                {
                  path: 'login',
                  component: LoginComponent
                },
                {
                  path: 'articulo/:id',
                  component: InfoArticuloComponent
                }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
