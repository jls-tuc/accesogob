export class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
        public usuario: string,
        public email: string,
        public password: string,
        public role?: string,
        public img?: string,
        public _id?: string

    ){}
};
