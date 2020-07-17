import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonaService } from '../../services/settings.service.index';
import swal from 'sweetalert';
import { personaForm } from '../../interfaces/personaForm.interface';







@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: [
  ]
})
export class PersonasComponent implements OnInit {
public cargando: boolean = true;
public persona: Persona [] = [];


  constructor(
    private personaService : PersonaService
  ) { }

  ngOnInit(): void {
    this.cargarPersonas();
  }


buscarPersona(termino: string){

  if ( termino.length <= 0){
      this.cargarPersonas();
  return;
 }
  this.personaService.buscarPersona( termino )
  .subscribe(persona => this.persona = persona  );


}

cargarPersonas(){
  this.personaService.cargarPersonas()
  .subscribe(persona => this.persona = persona  );
}

guardarPersona(persona: Persona){
    this.personaService.actualizarPersona(persona)
       .subscribe();
  }

borrarPersonas(persona: Persona){
  
    this.personaService.borrarPersona( persona._id )
      .subscribe(() => this.cargarPersonas( ) );
      console.log(persona._id);

  }
}

