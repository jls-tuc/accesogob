import { Component, OnInit } from '@angular/core';


declare function init_plugins(); 
// declaro la funcion del plugins en asset/ js/common
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }
  
}
