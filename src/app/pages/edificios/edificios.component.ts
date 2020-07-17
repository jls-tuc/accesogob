import { Component, OnInit } from '@angular/core';
import { Edificio } from '../../models/edificio.model';
import { EdificioService } from '../../services/settings.service.index';
import swal from 'sweetalert';


@Component({
  selector: 'app-edificios',
  templateUrl: './edificios.component.html',
  styles: [
  ]
})
export class EdificiosComponent implements OnInit {

   edificios: Edificio[] = [];

  constructor(
    public _edificioService: EdificioService
  ) { }

  ngOnInit(): void {
    this.cargarEdificios();
  }


buscarEdificio(termino: string){

  if ( termino.length <= 0){
      this.cargarEdificios();
  return;
 }
  this._edificioService.buscarEdificio( termino )
  .subscribe(edificios => this.edificios = edificios  );


}

cargarEdificios(){
  this._edificioService.cargarEdificios()
  .subscribe(edificios => this.edificios = edificios );
}

guardarEdificio(edificio: Edificio){
    this._edificioService.actualizarEdificio(edificio)
       .subscribe();
  }

borrarEdificio(edificio: Edificio){
    this._edificioService.buscarEdificio( edificio._id )
    .subscribe(() => this.cargarEdificios( ) );

  }
}
