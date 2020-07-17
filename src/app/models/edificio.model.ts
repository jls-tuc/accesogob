interface _EdificioUser {

    // tslint:disable-next-line: ban-types
    _id: String ;
    // tslint:disable-next-line: ban-types
    nombre: String ;
}


export class Edificio {

    constructor(
        public nombre: string,
        public localidad: string,
        public direccion: string,
        public img?: string,
        public _id?: string,
        public usuario?:_EdificioUser,
    ) { }
}
