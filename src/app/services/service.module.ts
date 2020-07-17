import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsService, SharedService, SidebarService, UsuarioService, SubirArchivosService, EdificioService, PersonaService  } from './settings.service.index';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { LoginGuardGuard } from './guards/login-guard.guard';

//Web Services
import {RenaperService, RRHHService} from './settings.service.index';






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
    SubirArchivosService,
    ModalUploadService,
    EdificioService,
    PersonaService,
    RenaperService,
    RRHHService
  ],
  })
export class ServiceModule { }
