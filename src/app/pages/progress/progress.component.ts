import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // se declara la V
  progreso1: number = 20;

  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }

  // actualizar( event: number ) {
  //  console.log('Evento: ', event );
// linea que se necesita solamente
  // this.progreso1 = event;
 //  }

//   cambiarValor( valor: number ) {

// // validaciones si es menor o igual a 100
//     if ( this.progreso >= 100 && valor > 0  ) {
//       this.progreso = 100;
//       return;
//     }

// // si es menor o igual a cero
//     if ( this.progreso <= 0 && valor < 0 ) {
//       this.progreso = 0;
//       return;
//     }


//     this.progreso = this.progreso + valor;

//   }

}
