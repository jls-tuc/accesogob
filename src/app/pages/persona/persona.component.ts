import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { RenaperService } from '../../services/ws/renaper.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { PersonaService } from '../../services/settings.service.index';
import { personaForm } from 'src/app/interfaces/personaForm.interface';




@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent implements OnInit {
  personaForm: FormGroup;
  personas: Persona[] = [];
  renaper: any = {};
  data: any = {};
  constructor(
    // tslint:disable-next-line: variable-name
    public _renaperService : RenaperService,
    public _personaService : PersonaService,
    public router: Router,

  ) { }
  
  ngOnInit(): void {

    this.personaForm = new FormGroup({
    nombre: new FormControl( null , Validators.required ),
    apellido: new FormControl( null , Validators.required ),
    fechaNacimiento: new FormControl ( null , Validators.required ),
    documento: new FormControl ('', [Validators.required, Validators.maxLength(8)]),
    cuil: new FormControl ( null , Validators.required ),
    sexo: new FormControl ( null , Validators.required ),
    calle: new FormControl ( null , Validators.required ),
    numero: new FormControl ( null , Validators.required ),
    piso: new FormControl ( null , Validators.required ),
    departamento: new FormControl( null , Validators.required ),
    cpostal: new FormControl ( null , Validators.required ),
    barrio: new FormControl ( null , Validators.required ),
    monoblock: new FormControl ( null , Validators.required ),
    zona: new FormControl ( null , Validators.required ),
    localidad: new FormControl ( null , Validators.required ),
    provincia: new FormControl ( null , Validators.required ),
    pais: new FormControl ( null , Validators.required ),
    img: new FormControl ( null , Validators.required ),
    origenf: new FormControl( null , Validators.required ),
    usuario: new FormControl( null , Validators.required ),
    });

  }
  Renaper(){

    let params =`documento=${this.personaForm.value.documento}&sexo=${this.personaForm.value.sexo}`;
    console.log(params);
    this._renaperService.getPersona(params).subscribe(data => {
      this.renaper = data ;
      this.personaForm.value.img = this.renaper.datos.foto;
      this.personaForm.value.apellido = this.renaper.datos.apellido;
      this.personaForm.value.nombre = this.renaper.datos.nombres;
      this.personaForm.value.fechaNacimiento = this.renaper.datos.fechaNacimiento;
      this.personaForm.value.cuil = this.renaper.datos.cuil;
      this.personaForm.value.calle = this.renaper.datos.calle;
      this.personaForm.value.numero = this.renaper.datos.numero;
      this.personaForm.value.piso = this.renaper.datos.piso;
      this.personaForm.value.departamento = this.renaper.datos.departamento;
      this.personaForm.value.cpostal = this.renaper.datos.cpostal;
      this.personaForm.value.monoblock = this.renaper.datos.monoblock;
      this.personaForm.value.zona = this.renaper.datos.municipio;
      this.personaForm.value.localidad = this.renaper.datos.ciudad;
      this.personaForm.value.provincia = this.renaper.datos.provincia;
      this.personaForm.value.pais = this.renaper.datos.pais;
      this.personaForm.value.origenf = this.renaper.datos.origenf;
   });
  }

  crearPersona(){
    this._personaService.crearPersona (this.personaForm.value)
    .subscribe(resp => {
      console.log('Se guardo en la base de datos');
      console.log(resp);
    }, (err) => {
      swal('Error', err.message, 'error');

    });
  }
}
