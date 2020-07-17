import { Injectable, ɵallowSanitizationBypassAndThrow } from '@angular/core';
import { Edificio } from '../../models/edificio.model';
import { HttpClient } from '@angular/common/http';
import { url_servicios } from '../../config/config';
import swal from 'sweetalert';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SubirArchivosService } from '../subirArchivo/subir-archivos.service';
import { UsuarioService } from '../usuario/usuario.service';





@Injectable({
  providedIn: 'root'
})
export class EdificioService {

    edificio: Edificio;
    totalEdificios: number = 0;

  constructor(
    public http: HttpClient,
    public router: Router,
    // tslint:disable-next-line: variable-name
    public _usuarioService: UsuarioService, // lo importo para obtener la funcion del token . token
    public _subirArchivoService: SubirArchivosService
  ) { }

cargarEdificios(){
  let url = url_servicios + '/edificio'; // es lo mismo de postman para realizar las pruebas
  return this.http.get(url)// retorna un observable con los mismos resultados del potman
            .pipe(map((resp: any ) => {
              this.totalEdificios = resp.total;
              return resp.edificios;
            }));
 }

 obtenerEdificio(id: string){
  let url = url_servicios + '/edificio/'+ id; // es lo mismo de postman para realizar las pruebas
  return this.http.get(url)// retorna un observable con los mismos resultados del potman
            .pipe(map((resp: any ) => resp.edificios
            ));

}

borrarEdificio(id: string){

let url = url_servicios + '/edificio/' + id;
url += '?token=' + this._usuarioService.token; // a la url se le tiene que concatenar el token para poder obetener acceso
return this. http.delete(url)
        .pipe(map(resp => swal('Se elimino correctamente el edificio', 'Eliminado correctamente', 'succes'))
        );


}
crearEdificio(edificio: Edificio ){
  let url = url_servicios + '/edificio';
  url += '?token=' + this._usuarioService.token;
  return this. http.post(url, edificio )
     .pipe(map( (resp: any) => {
     swal('Edificio creado', edificio.nombre, 'success' );
     return resp.edificio ;
  }));
}

buscarEdificio( termino: string ) {

  let url =  url_servicios + '/busqueda/coleccion/edificio/' + termino;
  return this.http.get( url )
              .pipe(map( (resp: any) => resp.edificio ));

}
actualizarEdificio( edificio: Edificio ) {

  let url = url_servicios + '/edificio/' + edificio._id;
  url += '?token=' + this._usuarioService.token;

  return this.http.put( url, edificio )
              .pipe(map( (resp: any) => { 
                swal('Datos del edificio actualizado', edificio.nombre, 'success' );
                return resp.edificio;
              }));

}

}
