import { Pipe, PipeTransform } from '@angular/core';
import { url_servicios } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, tipo: string = 'usuario'): any {

    let url = url_servicios + '/img';
   // console.log ('imagen' + url);
// los mismo de postman
    if ( !img ) {
      return url + '/usuario/xxx';
      //devuelve la no imagen!!
    }

    /* if ( img.indexOf('https') >= 0 ) {
      return img;
    } */

    switch ( tipo ) {

      case 'usuario':
        url += '/usuario/' + img;
       // console.log ('usuario' + img);
        break;
      case 'persona':
        url += '/persona/' + img;
        break;
      case 'edificio':
         url += '/edificio/' + img;
         break;
      default:
        console.log('tipo de imagen no existe, usuario, persona, edificio');
        url += '/usurio/xxx';
    }

    return url;
  }

}
