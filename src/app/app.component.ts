import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Control de Acceso';
  constructor (public _ajustes:SettingsService){}
}
