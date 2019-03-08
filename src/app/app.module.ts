import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { SharedModule } from './shared/shared.module';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './pages/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenusComponent } from './pages/menus/menus.component';
import { LoginComponent } from './pages/login/login.component';
import { InfoArticuloComponent } from './pages/info-articulo/info-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    UppercasePipe,
    AdminComponent,
    MenusComponent,
    LoginComponent,
    InfoArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
