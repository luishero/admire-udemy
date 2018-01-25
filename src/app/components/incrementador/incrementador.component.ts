import { Component, OnInit, Output, ViewChild, Input, EventEmitter, ElementRef } from '@angular/core';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; // referencia sin importar en que Componente estoy

  // las 2 V pueden venir de afuera y se puede renombrar ('nombre') desde afuera para los atributos personalizados
  @Input('nombre') leyenda: string = 'Leyenda'; // inicializacion en Propiedad  'valor por defento del Elmento
  @Input() progreso: number = 50;

  // notificar al padre : sintaxis para emitir un numero como un evento y cambiar el nombre en el Output
  @Output('actualizarValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda );
    // sconsole.log('progreso', this.progreso );
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda );
    // console.log('progreso', this.progreso );
  }


  onChanges ( newValue: number ) {

   // let elemHTML: any = document.getElementsByName('progreso')[0];

  // console.log( this.txtProgress );

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {

    this.progreso = newValue;
    }

  // elemHTML.value = this.progreso;
  this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );
  }
  cambiarValor( valor: number ) {

    // validaciones si es menor o igual a 100
        if ( this.progreso >= 100 && valor > 0  ) {
          this.progreso = 100;
          return;
        }
    // si es menor o igual a cero
        if ( this.progreso <= 0 && valor < 0 ) {
          this.progreso = 0;
          return;
        }


        this.progreso = this.progreso + valor;
        // Eventemitter emite el valor numerico que tenga progreso
      this.cambioValor.emit( this.progreso );
      // cambiar el foco
      this.txtProgress.nativeElement.focus();
      }

}
