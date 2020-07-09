import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {


  graficos: any = {
    grafico1: {
      labels: ['Sala de reuniones 1', 'Salas de reuniones 2', 'Oficina de Sistemas', 'Oficina de Administracion'],
      data:  [24, 30, 46, 25],
      type: 'doughnut',
      leyenda: 'Espacios activos'
    },
    grafico2: {
      labels: ['Visitantes', 'Empleados', 'Servicios Externos'],
      data:  [45, 35, 45],
      type: 'doughnut',
      leyenda: 'Ingresos el dia de hoy'
    },
    grafico3: {
      labels: ['Puerta A', 'Puerta B', 'Puerta C'],
      data:  [30, 50, 45 ],
      type: 'doughnut',
      leyenda: 'Ingresos por puertas habilitadas'
    },
    grafico4: {
      labels: ['Ingresaron', 'Retiraron' , 'Permanecen en el edificio'],
      data:  [125, 15, 115 ],
      type: 'doughnut',
      leyenda: 'Personas en el edificio'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
