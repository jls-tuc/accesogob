import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LoginGuardGuard } from '../services/settings.service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './persona/personas.component';





const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'Dashboard' } },
        { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficos' } },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes Visuales' } },
        { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
        // configuracion
        { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Configuracion de usuarios' } },
        { path: 'edificios', component: EdificiosComponent, data: { titulo: 'Configuracion de edificios' } },
        { path: 'persona/:id', component: PersonaComponent, data: { titulo: 'Cargar personas' } },
        { path: 'personas', component: PersonasComponent, data: { titulo: 'Administracion de Personas' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
}
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

// lo exportamos al pages.module.ts
