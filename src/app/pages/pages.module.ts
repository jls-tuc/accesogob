import { NgModule } from '@angular/core';
import { PAGES_ROUTES  } from './pages.routes';

// Modulos
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PipesModule } from '../pipes/pipes.module';
// temp
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '.././components/modal-upload/modal-upload.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { RouterModule } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './persona/personas.component';






@NgModule ({
declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent,
    EdificiosComponent,
    PersonaComponent,
    PersonasComponent
],
exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],
imports: [
   CommonModule,
   FormsModule,
   ReactiveFormsModule,
   SharedModule,
   RouterModule,
   PAGES_ROUTES,
   ChartsModule,
   PipesModule
   ]
})

export class Pagesmodule { }


