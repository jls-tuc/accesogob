import { Injectable } from '@angular/core';
import { url_servicios } from '../../config/config';

@Injectable()
export class SubirArchivosService {

  constructor() { }


  subirArchivo( archivo: File, tipo: string, id: string ) {

    return new Promise( (resolve, reject ) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append( 'imagen', archivo, archivo.name );
      // formData. tiene el nombre del campo que usamos para declarar en postman!(imagen)
      xhr.onreadystatechange = function() {

        if ( xhr.readyState === 4 ) {

          if ( xhr.status === 200 ) {
            console.log( 'Imagen subida' );
            resolve( JSON.parse( xhr.response ) );
          } else {
            console.log( 'No se cargo la imagen' );
            reject( xhr.response );
          }

        }
      };

      let url = url_servicios + '/upload/' + tipo + '/' + id;

      xhr.open('PUT', url, true );
      xhr.send( formData );

    });




  }

}
