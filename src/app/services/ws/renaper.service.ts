import { Injectable } from '@angular/core';
import { url_servicios } from '../../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RenaperService {
  static getPersona(params: any) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private http: HttpClient
  ) { }

  getPersona(persona: string) {
    let url = url_servicios + '/servicio/renaper';
    return this.http.get(url + `/?${persona}`);
  }

}


