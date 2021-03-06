import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// modulos
import { Pagesmodule } from './pages/pages.module';

// rutas
import { AppRoutingModule } from './app-routing.module';

// componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// temportal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// service module
import { ServiceModule } from './services/service.module';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Pagesmodule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
