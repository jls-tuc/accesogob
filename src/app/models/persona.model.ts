interface _PersonaUser {

    // tslint:disable-next-line: ban-types
    _id: String ;
    // tslint:disable-next-line: ban-types
    nombre: String ;
}

export class Persona {
    constructor(
         public nombre: string,
         public apellido: string,
         public fechaNacimiento: string,
         public documento: string,
         public cuil: string,
         public sexo: string,
         public calle: string,
         public numero: string,
         public piso: string,
         public departamento: string,
         public cpostal: string,
         public barrio: string,
         public monoblock: string,
         public zona: string,
         public localidad: string,
         public provincia: string,
         public pais: string,
         public img: string,
         public origenf: string,
         public usuario: _PersonaUser,
         public _id?: string
          ) {}
};











