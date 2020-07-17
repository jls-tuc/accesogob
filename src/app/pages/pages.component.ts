import { Component, OnInit } from '@angular/core';


declare function customInitFunctions();
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
    customInitFunctions();
  }
  
}
