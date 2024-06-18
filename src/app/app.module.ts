import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './Screens/general/general.component';
import { LoginComponent } from './Screens/login/login.component';
import { MenuComponent } from './Screens/menu/menu.component';
import { PrincipalComponent } from './Screens/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    LoginComponent,
    MenuComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
