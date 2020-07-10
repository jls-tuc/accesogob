import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/settings.service.index';
import { Usuario } from '../models/usuario.model';

// declaro la funcion del plugins en asset/ js/common
declare function init_plugins();



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;

  auth2: any;

  constructor(
    public router: Router,
    // tslint:disable-next-line: variable-name
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }

  }

  ingresar( forma: NgForm) {
// importo el ngForm del loginhtml
    /* console.log (forma.valid);
    console.log (forma.value); */


if ( forma.invalid ) {
      return;
    }
const usuario = new Usuario (null, '', '', forma.value.email, forma.value.password, '', '', '' );
this._usuarioService.login( usuario, forma.value.recuerdame )
                  .subscribe( correcto => this.router.navigate(['/dashboard'])  );

    // this.router.navigate([ '/dashboard' ]);

  }

}

