import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsService, SharedService, SidebarService, UsuarioService, SubirArchivosService} from './settings.service.index';
import { LoginGuardGuard } from './guards/login-guard.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivosService
  ],
  })
export class ServiceModule { }
